'use strict';

var _ = require('lodash');
var mongoose = require('mongoose');
var Building = require('../models/building');
var Lease = require('../models/lease');

// Get list of buildings
exports.index = function(req, res) {
  Building.find(function (err, buildings) {
    if(err) { return handleError(res, err); }
    return res.json(200, buildings);
  });
};

// Get a single building
exports.show = function(req, res) {
  Building.findById(req.params.id, function (err, building) {
    if(err) { return handleError(res, err); }
    if(!building) {
      return res.send(404);
      }
    return res.json(building);
  });
};

// Creates a new building in the DB.
exports.create = function(req, res) {
  Building.create(req.body, function(err, building) {
    if(err) { return handleError(res, err); }
    return res.json(201, building);
  });
};

// Updates an existing building in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Building.findById(req.params.id, function (err, building) {
    if (err) { return handleError(res, err); }
    if(!building) { return res.send(404); }
    var updated = _.merge(building, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, building);
    });
  });
};

// Deletes a building from the DB.
exports.destroy = function(req, res) {
  Building.findById(req.params.id, function (err, building) {
    if(err) { return handleError(res, err); }
    if(!building) { return res.send(404); }
    building.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

exports.leases = function(req, res, next){
  Lease.find({building_id: mongoose.Types.ObjectId(req.params.id)}, function(err, leases){
    if (err) { console.log(err); next() };
    console.log(leases);
    res.send(leases);
  });
}

function handleError(res, err) {
  return res.send(500, err);
}
