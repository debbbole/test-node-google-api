var key = require('./google/key');
var google = require('googleapis');

var jwtClient = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    ['https://www.googleapis.com/auth/androidpublisher'],
    null
);

jwtClient.authorize(function (err, tokens) {
    if (err) {
        console.log(err);
        return;
    }

    console.log(JSON.stringify(tokens));

    /*
    var cfg = {
        version: 'v2',
        auth: jwtClient
    }
    var paramsSubs = {
        packageName: '',
        subscriptionId: '',
        token: ''
    };
    var optionsSubs = {};
    //androidpublisher.purchases.subscriptions.get
    var subsClient = google.androidpublisher('v2').purchases.subscriptions;
    var subs = subsClient.get(paramsSubs, optionsSubs, function(err) {
        console.log('Error: ' + err);
    });
    console.log('R: ' + JSON.stringify(subs));
    */

    var cfg = {
        version: 'v2',
        auth: jwtClient
    }
    var paramsApk = {
        packageName: 'com.test',
        editId: 1
    };
    var optionsApk = {};
    //androidpublisher.edits.apks.list
    var apkClient = google.androidpublisher(cfg).edits.apks;
    var apks = apkClient.list(paramsApk, optionsApk, function(err) {
        console.log('Error: ' + err);
    });
    console.log('R: ' + JSON.stringify(apks));

});