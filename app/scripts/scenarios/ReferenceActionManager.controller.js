var constructor = function($scope, $location, ReferenceActions){
  ReferenceActions.dataReady.then(function(){
    $scope.ReferenceActions = ReferenceActions.all;
    console.log(ReferenceActions.all);
  });

  $scope.remove = function(index){
    var id = $scope.ReferenceActions[index]._id;
    ReferenceActions.remove(id, index).then(function(){
      $scope.ReferenceActions.splice(index, 1);
    });
  };

  $scope.addReferenceAction = function(){
    $location.path('/new-ref-action');
  };
};

constructor.$inject = ['$scope', '$location', 'ReferenceActions'];

angular.module('scenarioMdl')
  .controller('ReferenceActionManagerController', constructor);
