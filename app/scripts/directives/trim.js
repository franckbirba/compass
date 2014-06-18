angular.module('compassApp').directive('trim', function ($rootScope) {
	return {
        restrict: 'A',
        scope:{
        	model: '='
        },
        templateUrl:'/views/directives/trim.html',
        controller: ['$scope', '$http', '$rootScope', 'Auth', 'MODELS', '$route',function($scope, $http, $rootScope, Auth, MODELS, $route){
        	$scope.pictos = $scope.$parent.tmpTrim.pictos;
        	$scope.trim = $scope.$parent.tmpTrim;
        	$scope.$watch($scope.$parent.tmpTrim.pictos, function(newValue, oldValue){
        		$scope.pictos = $scope.$parent.tmpTrim.pictos;
        	});

        }]
    }
});