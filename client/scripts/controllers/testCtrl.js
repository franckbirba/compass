angular.module('tornadoApp')
  .controller('TestCtrl', function ($scope) {
    $scope.position = 10;
    $scope.$watch('position', function(newVal, oldVal){
      console.log('position now is ' + newVal);
    });

    $scope.showPlanifiedActions = 0;
});
