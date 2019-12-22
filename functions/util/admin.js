const admin = require("firebase-admin");
const serviceAccount = require("../../../socialape-functions/social-ape-e4a2a-firebase-adminsdk-cb0n5-785ac604b9.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://social-ape-e4a2a.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };