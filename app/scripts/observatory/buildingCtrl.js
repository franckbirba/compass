'use strict';

angular.module('observatoryModule')
  .controller('BuildingCtrl', function BuildingCtrl($scope, Auth, $location, buildingService) {
    var db = buildingService;
    var Building = buildingService.newBuilding();
    $scope.map = db.getMap();
    $scope.images = Building.getImages();
    $scope.certs = db.getCerts();

    function formBuilder(obj){
      var keys = [];
      Object.keys(obj).forEach(function(key){
        keys.push(key);
      })
      return keys;
    }

    $scope.delImage = function(index){
      Building.delImage(index);
    };
    $scope.adresskeys = formBuilder(Building.adress);
    $scope.building = Building;

});
