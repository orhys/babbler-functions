const admin = require("firebase-admin");

// Required to run Admin SDK functions locally
const serviceAccount = require("../../social-ape-e4a2a-firebase-adminsdk-cb0n5-785ac604b9.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://social-ape-e4a2a.firebaseio.com",
  storageBucket: "social-ape-e4a2a.appspot.com"
});

const db = admin.firestore();

module.exports = { admin, db };
