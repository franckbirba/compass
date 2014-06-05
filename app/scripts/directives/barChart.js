angular.module('compassApp').directive('barchart', function ($rootScope) {
	return {
        restrict: 'A',
        scope:{
        	model: '='
        },
        templateUrl:'/views/directives/barChart.html'
    }
});