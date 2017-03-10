var google = require('googleapis');

//var urlshortener = google.urlshortener({ version: 'v1', auth: 'AIzaSyB8VPpfDlGVi6bO4U2btBwqw9XpKaZENRM' });

var plus = google.plus('v1');

var API_KEY = 'AIzaSyB8VPpfDlGVi6bO4U2btBwqw9XpKaZENRM'; // specify your API key here

plus.people.get({
  auth: API_KEY,
  userId: '+google'
}, function (err, user) {
  console.log('Result: ' + (err ? err.message : user.displayName));
});