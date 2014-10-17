(function(){
  'use strict';

  angular.module('zombieApp', []);

  function ZombieCtrl($scope){
    $scope.alive = 'is alive';
    $scope.dead = 'is dead';
  };

  ZombieCtrl.$inject = ['$scope'];

  function ZombieSvc(){
    return {
      double: function(arg){
        return arg * 2
      }
    }
  };

  ZombieSvc.$inject = [];

  angular.module('zombieApp')
    .controller('ZombieCtrl', ZombieCtrl)
    .factory('ZombieSvc', ZombieSvc)
    .value('mode', 'app')
    .value('version', 'v1.0.1');


})();
