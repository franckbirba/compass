(function(){
  'use strict';

  function LeaseCtrl($scope, $routeParams){
    /*
    ** For multi-page form when using $routeProvider
    */
    $scope.leaseStep = 1;
    $scope.setLeaseStep = function(step){
      $scope.leaseStep = step;
    }
  }

  LeaseCtrl.$inject = ['$scope', '$routeParams'];

  angular.module('buildingMdl')
    .controller('LeaseCtrl', LeaseCtrl);

})();
