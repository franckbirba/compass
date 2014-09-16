angular.module('tornadoApp').directive('trim', function ($rootScope) {
  return {
        restrict: 'A',
        scope:{
          model: '='
        },
        templateUrl:'/views/directives/trim.html',
        controller: ['$scope', '$http', '$rootScope', 'Auth', 'MODELS', '$route',function($scope, $http, $rootScope, Auth, MODELS, $route){
          $scope.actions = $scope.$parent.tmpTrim.actions;
          $scope.trim = $scope.$parent.tmpTrim;
          $scope.$watch($scope.$parent.tmpTrim.actions, function(newValue, oldValue){
            $scope.actions = $scope.$parent.tmpTrim.actions;
          });
          $scope.onDragComplete = function(index, data, evt) {
            // TODO : do it through scopes
            window.sortedActionLiveIndex = index;
            console.log('trim drag complete ', index, data, evt);
          }
        }]
    }
});
