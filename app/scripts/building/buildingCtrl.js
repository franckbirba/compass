'use strict';

angular.module('buildingMdl')
  .controller('BuildingCtrl', function BuildingCtrl($scope, $routeParams, BuildingSvc) {
    var Building = BuildingSvc;
    var id = $routeParams.params || '';

    Building.get(id).then(function(res){
      $scope.building = res;
      $scope.buildingkeys = formBuilder($scope.building[0]);
      debugger
      $scope.update = function(){ res.put() };
    });

    $scope.buildings = Building.rest.getList().$object;

    $scope.create = function(params){
      Building.createBuilding(params).then(function(res){
        $scope.buildings.push(res);
      })
    }

});
