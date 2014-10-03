'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Portfolio Schema
 */
var PortfolioSchema = new Schema({
  name:       {type: String, default: ''},
  info:       {type: String, default: ''},
  summary:    {type: String, default: ''},
  buildings:  [{ type: Schema.Types.ObjectId, ref: 'Building' }],
  image:      {type: String, default: ''}
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
