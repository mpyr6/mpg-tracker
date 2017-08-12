"use strict"

var express = require('express');
//BODY PARSER TAKES THE INPUT OF AN AXIOS REQUEST AND CONVERTS IT TO A JSON OBJECT
var bodyParser = require('body-parser');
var path = require('path');
//IMPORTS DATA MODEL
var FillUpData = require('./models/mpgs');
var app = express();


//MIDDLEWARE TO DEFINE FOLDER FOR STATIC FILES
app.use(express.static('public'));
app.use(bodyParser.json());



//<------------ CONNECTION TO MONGODB DATABASE THROUGH MONGOOSE LIBRARY -------------->
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MPG_Calculator')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB - Connection Error'));
//<------------ END OF CONNECTION TO MONGODB DATABASE THROUGH MONGOOSE LIBRARY -------------->




//<------------ REQUESTS TO THE SERVER -------------->
//SERVER RECEIVES POST REQUEST. THE REQEUST INCLUDES A ROUTE (/db), AND A BODY. 
app.post('/db', function(req,res){
	//USES THE BODY PARSER (SEE ABOVE) TO CONVERT THE JSX OBJECT INTO A JSON STRING
	var entry = req.body;
	//CALLS THE MONGOOOSE CREATE FUNCTION TO CREATE AN ENTRY FROM OUR DATA THAT FITS THE STRUCTURE OF THE MODEL (DEFINED IN /MODELS)
	FillUpData.create(entry, function(err, dataSet){
	  if(err){
	    throw err;
	  }
	  console.log(dataSet);
	});
});

app.get('/db', function(req, res){
	FillUpData.find(function (err, mpgs){
		if(err){
			throw err;
		}
		res.json(mpgs);
	})
})

//SERVER RECEIVES A GET REQUEST. THE REQUEST INCLUDES A ROUTE (undefined at this time), AND A BODY. THE * SHOULD BE REPLACED WITH A / WHEN WE MOVE FROM DEVELOPMENT INTO DEPLOYMENT
app.get('*', function(req, res){
	//SERVER LOOKS FOR THE /PUBLIC DIRECTORY, AND SENDS INDEX.HTML BACK TO CLIENT
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});
//<------------END OF REQUESTS TO THE SERVER -------------->



//APP IS LISTENING ON PORT 3000. ALL ROUTES ABOVE MUST COME THROUGH PORT
app.listen(3000, function(){
	console.log('App is listening on port 3000');
});