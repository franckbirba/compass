var constructor = function($scope, $location, Actions){
  Actions.dataReady.then(function(){
    $scope.Actions = Actions.all;
  });

  $scope.remove = function(index){
    var id = $scope.Actions[index]._id;
    Actions.remove(id, index).then(function(){
      $scope.Actions.splice(index, 1);
    });
  };

  $scope.addAction = function(){
    $location.path('/new-action');
  };
};

constructor.$inject = ['$scope', '$location', 'Actions'];

angular.module('scenarioMdl')
  .controller('ActionManagerController', constructor);
