var constructor = function($scope, $location, ReferenceActions){

  $scope.send = function(newReferenceAction){
    newReferenceAction.icon = "lel";
    newReferenceAction.isDefault = false;

    ReferenceActions.create(newReferenceAction)
      .then(function(){
        $location.path('/ref-actions');
      });
  };

};

constructor.$inject = ['$scope', '$location', 'ReferenceActions'];

angular.module('scenarioMdl')
  .controller('NewReferenceActionController', constructor);
