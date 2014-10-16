(function(){
  'use strict';

  function BuildingCtrl($http, $scope, $location, $routeParams, Restangular, BuildingSvc, bar, something) {
    console.log('from controller')
    $scope.bar = bar;
    $scope.something = something;
    console.log($scope.bar);
    console.log($scope.something);
    var Buildings = BuildingSvc.rest;
    var BuildingObj = BuildingSvc.buildingObj;

    var id = $routeParams.id || '';
    $scope.portfolio_id = $routeParams.id || null;
    $scope.buildings = Buildings.getList().$object;

    $scope.building = function(){
      var b = BuildingSvc.get(id);
      console.log(b);
      console.log(b.getRestangularUrl());
    }

    $scope.update = function(){
      console.log(id);
      console.log($scope.building.getRestangularUrl());
    }



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

    $scope.saveBuilding = function(){
      $location.url('/leasetest')
    }

    /*
    ** Form multi-page form when using $routeProvider
    */
    $scope.buildStep = 1;
    $scope.setBuildStep = function(step){
      $scope.buildStep = step;
    }
    $scope.leaseStep = 1;
    $scope.setLeaseStep = function(step){
      $scope.leaseStep = step;
    }

  };

  BuildingCtrl.$inject = ['$http', '$scope', '$location', '$routeParams', 'Restangular', 'BuildingSvc', 'bar', 'something'];

  angular.module('buildingMdl')
    .controller('BuildingCtrl', BuildingCtrl);

})();
