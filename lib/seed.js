(function(){
  'use strict';

  // connect to db;
  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/tornado');


  var DIR = 'lib/seeds';
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
    if (file_name.split(".")[1] === 'yaml')
      return true;
    else
      return false;
  }

  function gracefulExit() {
    db.close(function () {
      console.log('Mongoose default connection with DB : is disconnected through app termination');
      process.exit(0);
    });
  }


  // Show connection error if there is one
  db.on('error', console.error.bind(console, 'Database Connection Error:'));

  /**
   * Create connections between seeds
   *
   */

   db.once('open', function callback(){
    var fs = require('fs');
    fs.readdir(DIR, function(err, dir_files){
      if (err) { console.log('Error:' + err) };
      var files = dir_files.filter(isYaml);
      var portfolios = YAML.load(DIR + '/portfolios.yaml');
      console.log(portfolios);

    });
   });



  /**
   * Loads all Yaml files in /seeds
   *
   */

  // db.once('open', function callback(){

  //   var fs = require('fs');
  //   // Get all files in seed dir
  //   fs.readdir(DIR, function(err, files){
  //     if(err) {
  //       console.log('Error: '+err)
  //     };
  //   // fetch data for every file in dir
  //     files.forEach(function(file){

  //       if (isYaml(file)){
  //         var collection_name = file.split(".")[0];
  //         var seeds = YAML.load(DIR + '/' + file);

  //         // case switch if file contains a single object or an Array
  //         if (seeds instanceof Array)
  //           seeds.forEach(function(elem){
  //             dbSave(collection_name, elem);
  //           });
  //         else if (seeds instanceof Object)
  //           dbSave(collection_name, seeds);
  //         else
  //           console.log('no valid data to load');
  //       }

  //     });
  //   });

    // If the Node process ends, close the Mongoose connection
    process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

  // });

})();
