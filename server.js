const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const serviceAccount = require("./keys.json");


app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//set up a port to listen for incoming requests
app.set( 'port', ( process.env.PORT || 3000 ));

// Start node server
app.listen( app.get( 'port' ),() =>{
console.log( 'Node server is running on port ' + app.get( 'port' ));
});

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://barcode-scanner-6394b.firebaseio.com"
});

const db = admin.database();
console.log(db);
