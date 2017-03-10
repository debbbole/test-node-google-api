'use strict';
var IAP = require('in-app-purchase');

IAP.config({
    verbose: true,
    googlePublicKeyPath: "./google/",
    googleAccToken: "ya29.GlsKBMw-Y_WEuLXchLMiY_W0E08pJDSNjOhrPwGoOYhF8jO3hVRo9VkH2UzrDAb3vfPaj3ELM-xmSsuDxhYRfvjNh_uqe107vNRxq40LnivfRLyKdvw6Ipf-ykjV",
    googleRefToken: "1/dGw63M7h2uqp8AjkbUUH6sSjkIevkvE1Rh5R0kksmf0",
    googleClientID: "772074648114-2r7kffgjl7n6ha10a9lb5tniv7u57ilj.apps.googleusercontent.com",
    googleClientSecret: "9dxG-4uE9Uj0HQlXLbrveMRK"
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