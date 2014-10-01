(function(){
  'use strict';

  // connect to db;
  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/tornado');


  var dir = 'lib/seeds';
  var db = mongoose.connection;
  var YAML = require('yamljs');

  // Function to add to mongo
  function dbSave(collection_name, elem){
    db.collection(collection_name).insert(elem, function(err, records){
      if(err) {
          console.log(err);
      }
      console.log(records[0]);
      console.log("Record added as " + records[0]);
    });
  }

  function isYaml(file_name){
    if (file_name.split(".")[1] === 'yaml'){
      console.log(file_name + ' contents');
      return true;
    }
    else {
      console.log(file_name + ' is not a yaml file');
      return false;
    }
  }

  // Show connection error if there is one
  db.on('error', console.error.bind(console, 'Database Connection Error:'));

  db.once('open', function callback(){

    var fs = require('fs');
    // Get all files in seed dir
    fs.readdir(dir, function(err, files){
      if(err) {
        console.log('Error: '+err)
      };
    // fetch data for every file in dir
      files.forEach(function(file){

        if (isYaml(file)){
          var collection_name = file.split(".")[0];
          var seeds = YAML.load(dir + '/' + file);

          // Drop previous data
          // db.collections['buildings'].drop( function(err) {
          //     console.log(collection_name + ' dropped');
          // });

        // case switch if file contains a single object or an Array
          if (seeds instanceof Array)
            seeds.forEach(function(elem){
              dbSave(collection_name, elem);
            });
          else if (seeds instanceof Object)
            dbSave(collection_name, seeds);
          else
            console.log('no valid data to load');
        }

      });
    });

  });

})();
