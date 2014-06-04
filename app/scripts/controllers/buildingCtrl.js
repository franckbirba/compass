'use strict';

angular.module('compassApp')
  .controller('BuildingCtrl', function ($scope, Auth, $location) {
    
  $scope.map = {
      center: {
          latitude: 45,
          longitude: -73
      },
      zoom: 8
  };
});