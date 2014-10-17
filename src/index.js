var fs      = require('fs'),
		request = require('request'),
		colors  = require('colors'),
		CONFIG  = require('../config.json');

var fb_url = 'https://graph.facebook.com/'+CONFIG.page_id+'/feed?limit=25&since='+CONFIG.since+'&__previous=1&access_token=' + CONFIG.user_access_token;

var counter = 0;

// Clear previous attempts
fs.writeFileSync('out/matching_posts.json', '');

var snapshot_posts = [];

function getPage(url, cb){
	request(url, function (err, response, body, url) {
	  if (err) {throw err};
	  cb(err, body, url);
	})
}

function addPost(post){
	console.log(post.created_time.blue);
	snapshot_posts.push(post);
}

function writeFile(){
	console.log('Writing file...'.red)
	fs.writeFileSync('out/matching_posts.json', JSON.stringify(snapshot_posts))
}

function extractMatchingComments(json, url){
	// Make case-insensitive with the `'i'` option.
	var regex = new RegExp(CONFIG.regex, 'i');
	json.data.forEach(function(post){
		var matches;
		if (post.message){

			matches = regex.test(post.message);
			if (matches){
				console.log('Found '+CONFIG.regex+' msg'.green);
				addPost(post);

			}else{
				if (post.comments){
				post.comments.data.forEach(function(comment){

						matches = regex.test(post.message);
						if (matches){
						console.log('Found '+CONFIG.regex+' msg'.purple);
						addPost(post);
					}

				})
					
				}
			}
		}
	});
	getNext(json.paging.next);
}

function getNext(url){
	counter++;
	console.log('Fetching...', url);
	getPage(url, function(err, body, url){
		extractMatchingComments( JSON.parse(body), url);
	})
	if (counter % 10 == 0){
		writeFile();
	}
}

getNext(fb_url)

