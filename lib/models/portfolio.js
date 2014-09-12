'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Portfolio Schema
 */
var PortfolioSchema = new Schema({
  name: String,
  info: String,
  summary: String,
  portfolio: Number,
});

/**
 * Validations
 */
PortfolioSchema.path('portfolio').validate(function (num) {
  return num >= 1 && num <= 10;
}, 'Portfolio must be between 1 and 10');

mongoose.model('Portfolio', PortfolioSchema);
