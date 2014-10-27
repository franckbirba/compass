(function(){
  'use strict';

  function BuildingCtrl(
    $scope,
    $location,
    $routeParams,
    BuildingSvc,
    model,
    index,
    show) {

    var id = $routeParams.id || null;
    $scope.portfolio_id = id;

    /*
    ** Promises resolved in controller
    */
    $scope.buildings = index;
    $scope.building = show;
    $scope.model = model;

    /*
    ** Crud interactions
    */
    $scope.update = function(){
      console.log(id);
      console.log($scope.building.put());
    }

    $scope.create = function(building){
      building.save().then(function(res){
        $scope.buildings.push(res);
      })
    }

    $scope.remove = function(elem){
      elem.remove().then(function(res){
        var idx = $scope.buildings.indexOf(elem);
        if (idx > -1) $scope.buildings.splice(idx, 1);
      });
    }

    $scope.saveBuilding = function(params){
      console.log(params)
      BuildingSvc.post(params)
      console.log('going to next step');
      // $location.url('/leasetest')
    }

    /*
    ** For multi-page form when using $routeProvider
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

  BuildingCtrl.$inject = [
    '$scope',
    '$location',
    '$routeParams',
    'BuildingSvc',
    'model',
    'index',
    'show'
    ];

  angular.module('buildingMdl')
    .controller('BuildingCtrl', BuildingCtrl);

})();
