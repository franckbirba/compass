'use strict';

var mongoose = require('mongoose'),
    Portfolio = mongoose.model('Portfolio'),
    Building = mongoose.model('Building');

exports.index = function (req, res, next) {
  return Portfolio.find(function (err, portfolios) {
    if (!err) {
      return res.send(portfolios);
    } else {
      return console.log(err);
    }
  });
};

exports.buildings = function(req, res, next) {
  Building.find({portfolio: mongoose.Types.ObjectId(req.params.id)}, function(err, buildings){
    if (err) { console.log(err); next() };
    res.send(buildings);
  });
}

// Creates a new post in the DB.
exports.create = function(req, res) {
  Portfolio.create(req.body, function(err, portfolio) {
    if(err) { return handleError(res, err); }
    return res.json(201, portfolio);
  });
};
