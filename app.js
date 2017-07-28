const yargs = require('yargs');
const dateFormat = require('dateformat')
var now = new Date();
const {MongoClient, ObjectID} = require('mongodb');

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
  // .alias(help,h)
  .argv;

var miles = argv.miles;
var gallons = argv.gallons;
var date = dateFormat(now,'shortDate');
var gas = argv.gas;
var price = argv.price;
var mpg = (range, fuel) => {
  return range/fuel
};



MongoClient.connect('mongodb://localhost:27017/MPG_Calculator', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

db.collection('MPG_Database').insertOne({
  filldate: date,
  distance: miles,
  galAmount: gallons,
  effeciency: mpg(miles,gallons),
  gasPrice: price,
  fuel: gas
}, (err,result) => {
  if (err) {
    return console.log('Unable to insert to database', err);
  }
  console.log(JSON.stringify(result.ops, undefined, 2));
});

  db.close();
});
