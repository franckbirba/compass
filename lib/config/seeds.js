'use strict';

var mongoose = require('mongoose'),
  Portfolio = mongoose.model('Portfolio'),
  Building = mongoose.model('Building');

/**
 * Populate database with sample application data
 */


  var many = new Portfolio({
      name: 'has_many',
      desc: 'nothing to say'
  });

  many.save(function(err){
     if (err) console.log(err);
      var buildings = [];
      var b1 = new Building({
        name: 'b1',
        portfolio: many._id,
      });
      var b2 = new Building({
        name: 'b2',
        portfolio: many._id,
      });
      var b3 = new Building({
        name: 'b3',
        portfolio: many._id,
      });
      buildings.push(b1);
      buildings.push(b2);
      buildings.push(b3);
      buildings.forEach(function(building){
        building.save(function(err){
          console.log(err);
          many.buildings.push(building);
        });
        many.save();
      });
  });


//   // connect to db;
//   var mongoose = require('mongoose');
//   mongoose.connect('mongodb://localhost/tornado');


//   var DIR = 'lib/seeds';
//   var db = mongoose.connection;
//   var YAML = require('yamljs');

//   // Function to add to mongo
//   function dbSave(collection_name, elem){
//     db.collection(collection_name).insert(elem, function(err, records){
//       if(err) {
//           console.log(err);
//       }
//       console.log(records[0]);
//       console.log("Record added as " + records[0]);
//     });
//   }

//   function isYaml(file_name){
//     if (file_name.split(".")[1] === 'yaml')
//       return true;
//     else
//       return false;
//   }

//   function gracefulExit() {
//     db.close(function () {
//       console.log('Mongoose default connection with DB : is disconnected through app termination');
//       process.exit(0);
//     });
//   }


//   // Show connection error if there is one
//   db.on('error', console.error.bind(console, 'Database Connection Error:'));

//   /**
//    * Create connections between seeds
//    */



//    db.once('open', function callback(){

//     var Rapper = mongoose.model('Rapper');
//     var rapper = new Rapper({
//       name: 'Louis',
//       rating: 'low',
//       releaseYear: 200
//     });

//    rapper.save(function(err, res) {
//     if (err) return console.error(err);
//       console.dir(res);
//     });

//     var find = Rapper.findOne({name: 'Drake'}, function(err, res){
//         if (err) return console.error(err);
//         console.dir(res);
//     });
//     console.log(find);

    // var fs = require('fs');
    // fs.readdir(DIR, function(err, dir_files){
    //   if (err) { console.log('Error:' + err) };
    //   var files = dir_files.filter(isYaml);
    //   var portfolios = YAML.load(DIR + '/portfolios.yaml');
    //   console.log(portfolios);

    //   var Building = db.model('Buildings');
    //   console.log(Building);

    // });
   //});



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
//    process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

  // });
