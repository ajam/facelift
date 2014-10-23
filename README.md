Facelift
===

A small script to search Facebook posts and (post comments) on a given page by a matching keyword. Used in (the soon-to-be-released) [Terms of Service](http://projects.aljazeera.net/2014/terms-of-service) for finding mentions of the Snapshot program by Progressive auto insurance customers.

Matching posts are saved as an array of Facebook post objects in `out/matching_posts.json` every ten matches. Searches are case-insensitive.

## Notice 

This is not a comprehensive library by any means. It is a small script to download paginated data from one Facebook API endpoint.

## Usage

Set the following values in `config.json`

* `user_access_token`: Obtain a temporary access token for the Facebook API. You'll have to create an app first. Learn more at <https://developers.facebook.com/tools/accesstoken/>
* `page_id`: The ID of the Facebook page you want to point Facelift at.
* `keyword`: The desired keyword to match on.
* `since`: A Unix timestamp of the earliest you want to start searching from. Defaults to `0` if not set.

A sample configuration would be:

````json
{
	"user_access_token": "Dfpo23hDnd92",
	"page_id": "17027909138",
	"keyword": "snapshot",
	"since": "1390838523"
}
````

To run

````
node src/index.js
````
or

````
npm start
````

## License

MIT
