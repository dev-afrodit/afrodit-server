const admin = require('firebase-admin');
// const dotenv = require('dotenv').config()

const serviceAccount = require("./service_keys.json");

//* Initiliaze Firebase
const db = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DATABASE_URL
});

module.exports = db;