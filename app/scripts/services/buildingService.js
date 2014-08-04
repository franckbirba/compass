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

  this.buildings = [];

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