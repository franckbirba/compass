(function(){
  'use strict';

  function LeaseCtrl($scope, $routeParams, index){
    $scope.leases = index;

    /*
    ** For multi-page form when using $routeProvider
    */
    $scope.leaseStep = 1;
    $scope.setLeaseStep = function(step){
      $scope.leaseStep = step;
    }
  }

  LeaseCtrl.$inject = ['$scope', '$routeParams', 'index'];

  angular.module('buildingMdl')
    .controller('LeaseCtrl', LeaseCtrl);

})();
