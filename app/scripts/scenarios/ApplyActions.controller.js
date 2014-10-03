var constructor = function($scope, $location, ReferenceActions, Actions, BuildingSvc){
  ReferenceActions.dataReady.then(function(){
    $scope.ReferenceActions = ReferenceActions.all;
  });

/*
  Buildings.dataReady.then(function(){
    $scope.Buildings = Buildings.all;
  });
*/

  $scope.apply = function(choosenActions/*, choosenBuildings*/){
    angular.forEach(choosenActions, function(el, idx){
      angular.forEach(/*Buildings*/[], function(el, idx){
        Actions.create(/*building, */refAction);
      });
    });
  };
};

constructor.$inject = ['$scope', '$location', 'ReferenceActions', 'Actions'/*, 'Buildings'*/];

angular.module('scenarioMdl')
  .controller('ApplyActionsController', constructor);
