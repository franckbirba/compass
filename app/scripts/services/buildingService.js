/* *
 *  Buildings service is responsible for
 *  fetching buildings list from server, saving, filtering etc
 */
'use strict';

angular.module('compassApp').service('buildingService', ['$http', function($http){
  var self = this;
  // dummy data atm
  //this.url = '/test_data/buildings.json';

  this.buildings = [
            {
              "id": 1,
              "name": "Bâtiment 1",
              "usage": "A",
              "address": "whatever street",
              "latitude": 45,
              "longitude": -73
            },
            {
              "id": 2,
              "name": "Bâtiment 2",
              "usage": "E",
              "address": "whatever street",
              "latitude": 45.23,
              "longitude": -73.123
            },
            {
              "id": 3,
              "name": "Bâtiment 3",
              "usage": "B",
              "address": "whatever street",
              "latitude": 45.34,
              "longitude": -73.023
            },
            {
              "id": 4,
              "name": "Bâtiment 4",
              "usage": "C",
              "address": "whatever street",
              "latitude": 45.13,
              "longitude": -73.123
            },
            {
              "id": 5,
              "name": "Bâtiment 5",
              "usage": "D",
              "address": "whatever street",
              "latitude": 45.03,
              "longitude": -73.103
            }
          ];

  this.getAll = function() {
    return this.buildings;
  };

  this.getUsageTypes = function() {
    var usageTypes = {},
      ret = [];

    for (var i=0, l=this.buildings.length; i<l; i++) {
      usageTypes[this.buildings[i].usage] = true;
    }

    for (var prop in usageTypes) {
      if (usageTypes.hasOwnProperty(prop)) {
        ret.push(prop);
      }
    }

    return ret;
  };
  
  this.test = function() {
    return [
    "A", "B", "C", "D", "E", "F"
    ];
  }

}]);