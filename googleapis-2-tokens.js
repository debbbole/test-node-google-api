var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;

var oauth2Client = new OAuth2(
  "772074648114-2r7kffgjl7n6ha10a9lb5tniv7u57ilj.apps.googleusercontent.com",
  "9dxG-4uE9Uj0HQlXLbrveMRK",
  "https://developers.google.com/oauthplayground"
);

var code = "4/jDwy6y2SIzPdNbEoWqwtz7tkeYRd5cSkR3UcxFsBGR0#";

oauth2Client.getToken(code, function (err, tokens) {
  // Now tokens contains an access_token and an optional refresh_token. Save them.
  console.log(JSON.stringify(tokens));
  if (!err) {
    oauth2Client.setCredentials(tokens);
  }
});

/* output:

{"access_token":"ya29.GlsKBMw-Y_WEuLXchLMiY_W0E08pJDSNjOhrPwGoOYhF8jO3hVRo9VkH2UzrDAb3vfPaj3ELM-xmSsuDxhYRfvjNh_uqe107vNRxq40LnivfRLyKdvw
6Ipf-ykjV","refresh_token":"1/dGw63M7h2uqp8AjkbUUH6sSjkIevkvE1Rh5R0kksmf0","token_type":"Bearer","expiry_date":1489167991605}

*/