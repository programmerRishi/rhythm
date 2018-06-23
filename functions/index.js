const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const serviceAccount = require('./service-account.json');
const trimAndSendDatabase = require('./trimAndSendDatabase');
const findEventOfOrganiser = require('./findEventOfOrganiser');

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://rhythm-56cb4.firebaseio.com"
});

exports.trimDatabase = functions.https.onRequest(trimAndSendDatabase);
exports.findEvent = functions.https.onRequest(findEventOfOrganiser);
