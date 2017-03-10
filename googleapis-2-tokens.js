var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;

var oauth2Client = new OAuth2(
  "XXX.apps.googleusercontent.com",
  "SSS",
  "https://developers.google.com/oauthplayground"
);

var code = "4/CCCCCCC";

oauth2Client.getToken(code, function (err, tokens) {
  // Now tokens contains an access_token and an optional refresh_token. Save them.
  console.log(JSON.stringify(tokens));
  if (!err) {
    oauth2Client.setCredentials(tokens);
  }
});

/* output:

{"access_token":"ya29.AAA_BBBBBBBB_CCCCC","refresh_token":"1/TTTTTTTTTTTTTTTTTT","token_type":"Bearer","expiry_date":1489167991605}

*/