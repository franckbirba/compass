angular.module('tornadoApp')
  .directive('appnav', function ($rootScope) {
    return {
          restrict: 'EA',
          templateUrl:'/scripts/common/nav.html'
      }
  });
