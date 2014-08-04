'use strict';
angular.module('compassApp').controller('ObservatoryController', ['$scope', 'buildingService', 'Geocoder', function($scope, buildingService, Geocoder){
  
  // map
  $scope.map = {
      center: {
          latitude: 48.8715008,
          longitude: 2.3268878999999743
      },
      zoom: 14
  };
  
  $scope.geocoder = Geocoder;
Geocoder.geocodeAddress('21, rue Godot de Mauroy, Paris, France').then(function(){console.log(arguments)})
  var observatory = this;
  this.portfolios = [];
  this.buildings = [];
  this.leases = [];
  
  // load everything without special business logic
  
  buildingService.getPortfolios().then(function(response){
    observatory.portfolios = response.data;
  });
  
  buildingService.getBuildings().then(function(response) {

    if (response && response.data && response.data instanceof Array) {
      response.data.forEach(function(b, idx){
        var addr = [ b.address, b.city, b.country ].join(',');

        $scope.geocoder.geocodeAddress(addr).then(function(result){
          this.id = this.id || this._id;
          this.position = {
            "latitude": parseFloat(result.lat),
            "longitude": parseFloat(result.lng),
            "formattedAddress": result.formattedAddress
          };
          observatory.buildings.push(this);
        }.bind(b));

      });
    }

  });

  buildingService.getLeases().then(function(response){
    observatory.leases = response.data;
  });

  $scope.usageTypes = buildingService.getUsageTypes();
  $scope.currentUsageType = '0';

  this.markerClick = function() {
    //alert('marker clicked');
  };
  
  $scope.closeClick = function() {
    
  }

}]);
