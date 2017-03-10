'use strict';
var IAP = require('in-app-purchase');

IAP.config({
    verbose: true,
    googlePublicKeyPath: "./google/",
    googleAccToken: "ya29.XXX_CCC_DDD",
    googleRefToken: "1/FFFFFF",
    googleClientID: "XZSXZSXZS.apps.googleusercontent.com",
    googleClientSecret: "SSS"
});


var rcpt = {
    "data": "{}",
    "signature": "xxx"
};


IAP.setup(function (error) {
    console.log("SETUP");

    if (error) {
        return console.error('something went wrong...');
    }

    /*
        google receipt must be provided as an object
        {
            "data": "{stringified data object}",
            "signature": "signature from google"
        }
    */

    IAP.validate(IAP.GOOGLE, rcpt, function (err, googleRes) {
        console.log("VALIDATE");
        if (err) {
            return console.error(err);
        }
        console.log(JSON.stringify(googleRes))
        if (iap.isValidated(googleRes)) {
            // yay good!
        }
    });

});