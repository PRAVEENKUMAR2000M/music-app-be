const admin = require("firebase-admin");
require("dotenv").config();

const serviceAccountKey = JSON.parse(process.env.ServiceAccountKey);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey)
});

module.exports = admin;
