'use strict';

angular.module('buildingMdl')
  .controller('BuildingCtrl', function BuildingCtrl($scope, BuildingSvc) {
    var Building = BuildingSvc;

    // var Building = db.newBuilding();
    // $scope.map = db.getMap();
    // $scope.images = Building.getImages();
    // $scope.certs = db.getCerts();

    // $scope.delImage = function(index){
    //   Building.delImage(index);
    // };
    // $scope.adresskeys = formBuilder(Building.adress);
    // $scope.building = Building;


    $scope.buildings = Building.getList().$object;

    $scope.create = function(params){
      var Building = Restangular.one('buildings');
      angular.extend(Building, params);
      Building.post().then(function(res){
        Building.id = res._id;
        $scope.buildings.push(Building);
      });
    }




});
