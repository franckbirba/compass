(function(){
  'use strict';

  function BuildingCtrl($http, $scope, $location, $routeParams, BuildingSvc, Restangular) {
    var Buildings = BuildingSvc.rest;
    var BuildingObj = BuildingSvc.buildingObj;

    var id = $routeParams.id || '';
    $scope.portfolio_id = $routeParams.id || '';
    $scope.buildings = Buildings.getList().$object;

    Restangular.one('portfolio', $scope.portfolio_id).getList('buildings').then(function(res){
      console.log(res);
    })

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

    // No longer necessary (k, v) in x
    // $scope.addressKeys = formBuilder(BuildingObj.address);
    // $scope.infoKeys = formBuilder(BuildingObj.info);


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

  BuildingCtrl.$inject = ['$http', '$scope', '$location', '$routeParams', 'BuildingSvc','Restangular'];

  angular.module('buildingMdl')
    .controller('BuildingCtrl', BuildingCtrl);

})();
