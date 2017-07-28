const yargs = require('yargs');
const dateFormat = require('dateformat')
var now = new Date();

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
var mpg = (range, fuel) => {
  return range/fuel
};
