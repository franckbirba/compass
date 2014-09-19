'use strict';

angular.module('buildingMdl')
  .controller('BuildingCtrl', function BuildingCtrl($scope, $routeParams, BuildingSvc, Restangular) {
    var Buildings = BuildingSvc.rest;
    var id = $routeParams.id || '';
    $scope.portfolio_id = $routeParams.id || '';

  $scope.building = function(){
    var b = BuildingSvc.get(id);
    console.log(b);
    console.log(b.getRestangularUrl());
  }

  $scope.update = function(){
    console.log(id);
    console.log($scope.building.getRestangularUrl());
  }

    $scope.buildings = Buildings.getList().$object;

    $scope.create = function(params){
      BuildingSvc.createBuilding(params).then(function(res){
        $scope.buildings.push(res);
      })
    }

    $scope.remove = function(elem){
      elem.remove().then(function(res){
        var idx = $scope.buildings.indexOf(elem);
        if (idx > -1) $scope.buildings.splice(idx, 1);
      });
    }

});
