'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing');
    
    var crud = require('./crud.js').CRUD;
    var dbClient = new crud();
    var zlib = require('zlib');

    var fileSystem = require('fs'),
        path = require('path');

    function gzipEncode(req, res, obj, jsonp){
        if(jsonp){
            res.writeHead(200, {'Content-Type': 'application/json', 'Content-Encoding': 'gzip', 'Charset': 'utf8'});
        } else {
            res.writeHead(200, {'Content-Type': 'application/javascript', 'Content-Encoding': 'gzip'});
        }
       
        var data = typeof obj == 'object' ? JSON.stringify(obj) : obj;
         console.log(typeof obj, obj);
        zlib.gzip(data, function (_, result) {  // The callback will give you the 
            res.end(result);                     // result, so just send it.
        });
    }
/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.crud = function(req, res){
    var method = req.method.toLowerCase();
    var collection = req.params.collection;
    var jsonpCallback = req.query.callback;
    if(jsonpCallback)
        delete req.query.callback;
    console.log(method, collection, req.body, req.query);
    dbClient[method](collection, {body: req.body, query: req.query, params: req.params}, function(err, results) {
        if(err)
            res.send(500,err);
        else{
            if(jsonpCallback) {
                gzipEncode(req,res, jsonpCallback + '(' + JSON.stringify(results) + ');', true);
            } else
                gzipEncode(req,res, results);
            
        }
    });
}