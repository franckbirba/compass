/* *
 *  Buildings service is responsible for
 *  fetching buildings list from server, saving, filtering etc
 */
'use strict';

angular.module('compassApp').service('buildingService', ['$http', function($http){
  var self = this,
    urlBase = '/crud/',
    urlPortfolios = urlBase + 'portfolio/',
    urlBuildings  = urlBase + 'building/',
    urlLeases     = urlBase + 'lease/';
  

  window.testBuildings = this.buildings = [
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

  this.getBuildings = function(portfolioId) {
    var params = portfolioId ?  { portfolio: portfolioId } : {};
    return $http.get(urlBuildings, params).then(function(response) {
      return response;
    });
  };
  
  this.getPortfolios = function(propertyId) {
    var params = propertyId ? { propertyId: propertyId } : {};
    return $http.get(urlPortfolios, params).then(function(response){
      return response;
    })
  };
  
  this.getLeases = function(buildingId) {
    var params = buildingId ? { buildingId : buildingId } : {};
    return $http.get(urlLeases, params).then(function(response){
      return response;
    });
  };

  this.getUsageTypes = function() {
    var usageTypes = {
      '0' : 'Par type d\'usage'
    };

    for (var i=0, l=this.buildings.length; i<l; i++) {
      usageTypes[this.buildings[i].usage] = usageTypes[this.buildings[i].usage] || this.buildings[i].usage + ' label';
    }

    return usageTypes;
  };
  
  this.getByUsageType = function(type) {
    
  }

}]);