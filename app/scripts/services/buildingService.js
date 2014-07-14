/* *
 *  Buildings service is responsible for
 *  fetching buildings list from server, saving, filtering etc
 */
'use strict';

angular.module('compassApp').service('buildingService', ['$http', function($http){
  var self = this;
  // dummy data atm
  //this.url = '/test_data/buildings.json';
  
  this.getAll = function() {
    return [
            {
              "name": "Bâtiment 1",
              "usage": "A",
              "address": "whatever street",
              "coords": {
                "latitude": 45,
                "longitude": -73
              }
            },
            {
              "name": "Bâtiment 2",
              "usage": "E",
              "address": "whatever street",
              "coords": {
                "latitude": 45.23,
                "longitude": -73.123
              }
            },
            {
              "name": "Bâtiment 3",
              "usage": "B",
              "address": "whatever street",
              "coords": {
                "latitude": 45.34,
                "longitude": -73.023
              }
            },
            {
              "name": "Bâtiment 4",
              "usage": "C",
              "address": "whatever street",
              "coords": {
                "latitude": 45.13,
                "longitude": -73.123
              }
            },
            {
              "name": "Bâtiment 5",
              "usage": "D",
              "address": "whatever street",
              "coords": {
                "latitude": 45.03,
                "longitude": -73.103
              }
            }
          ];
  };

}]);