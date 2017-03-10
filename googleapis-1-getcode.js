var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;

var oauth2Client = new OAuth2(
  "772074648114-2r7kffgjl7n6ha10a9lb5tniv7u57ilj.apps.googleusercontent.com",
  "9dxG-4uE9Uj0HQlXLbrveMRK",
  "https://developers.google.com/oauthplayground"
);

// generate a url that asks permissions for Google+ and Google Calendar scopes
var scopes = [
  'https://www.googleapis.com/auth/androidpublisher'
];

var url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: scopes,

  // Optional property that passes state parameters to redirect URI
  // state: { foo: 'bar' }
});

console.log(url);

/* output:

https://developers.google.com/oauthplayground/?code=4/jDwy6y2SIzPdNbEoWqwtz7tkeYRd5cSkR3UcxFsBGR0#

*/