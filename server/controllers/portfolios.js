'use strict';

var mongoose = require('mongoose'),
    Portfolio = mongoose.model('Portfolio');

exports.index = function (req, res, next) {
  return Portfolio.find(function (err, portfolios) {
    if (!err) {
      return res.send(portfolios);
    } else {
      return console.log(err);
    }
  });
};

