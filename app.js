const yargs = require('yargs');
const dateFormat = require('dateformat')
var now = new Date();
const {MongoClient, ObjectID} = require('mongodb');
const express = require('express');
const {mongoose} = require('./server/db/mongoose');
var fillUpData = require('./models/mpgs');


// Input though Terminal
const argv = yargs
  .options({
    miles: {
      demand: true,
      describe: 'How many miles since last fill-up',
      type: 'number'
    },
    gallons: {
      demand: true,
      describe: 'How many gallons to fill tank',
      type: 'number'
    },
    price: {
      demand: true,
      describe: 'Price of gas',
      type: 'number'
    },
    gas: {
      demand: true,
      describe: 'Gas Type',
      choices: [87,89,91]
    }
  })
  .help()
  .argv;

var miles = argv.miles;
var gallons = argv.gallons;
var date = dateFormat(now,'shortDate');
var gas = argv.gas;
var price = argv.price;
var mpg = (range, fuel) => {
  return range/fuel
};


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB - Conneciton Error'));

var entry = {
  filldate: date,
  distance: miles,
  galAmount: gallons,
  efficiency: mpg(miles,gallons),
  gasPrice: price,
  fuel: gas
};

fillUpData.create(entry, function(err, datas){
  if(err){
    throw err;
  }
  console.log(datas);
});

// db.collection('MPG_Database').insertOne({
//   filldate: date,
//   distance: miles,
//   galAmount: gallons,
//   effeciency: mpg(miles,gallons),
//   gasPrice: price,
//   fuel: gas
// }, (err,result) => {
//   if (err) {
//     return console.log('Unable to insert to database', err);
//   }
//   console.log(JSON.stringify(result.ops, undefined, 2));
//
//
// });
