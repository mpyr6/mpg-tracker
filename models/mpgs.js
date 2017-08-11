"use strict"

const mongoose = require('mongoose');


var mpgSchema = mongoose.Schema({
  filldate: String,
  distance: Number,
  galAmount: Number,
  efficiency: Number,
  gasPrice: Number,
  fuel: Number
});

var fillUpData = mongoose.model('MPG_Database', mpgSchema);

module.exports = fillUpData;
