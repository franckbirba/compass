'use strict';

angular.module('buildingMdl')
  .controller('BuildingCtrl', function BuildingCtrl($scope, BuildingSvc) {
    var api = BuildingSvc;

    // var Building = db.newBuilding();
    // $scope.map = db.getMap();
    // $scope.images = Building.getImages();
    // $scope.certs = db.getCerts();

    // $scope.delImage = function(index){
    //   Building.delImage(index);
    // };
    // $scope.adresskeys = formBuilder(Building.adress);
    // $scope.building = Building;


    $scope.buildings = api.getList().$object;

    $scope.create = function(params){
      // Create new Restangular element with params
      var Building = Restangular.one('buildings');
      angular.extend(Building, params);
      // Post to api
      Building.post().then(function(res){
      // add new id to elem
        Building.id = res._id;
      // push to scope
        $scope.buildings.push(Building);
      });
    }




});
