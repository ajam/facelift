Facelift
===

A small script to search Facebook posts on a given page by a matching keyword. Used in [Terms of Service](http://projects.aljazeera.net/2014/terms-of-service) for finding mentions of the Snapshot program by Progressive auto insurance.

Matching posts are 

## Usage

Set the following values in `config.json`

* `user_access_token`: Obtain a User Access Token for the Facebook API. Read more about tokens <https://developers.facebook.com/docs/facebook-login/access-tokens>
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

## TODO

I'm using a very simple implementation with `underscore.string`. Supporting a proper regex would be more flexible. Pull requests welcome!