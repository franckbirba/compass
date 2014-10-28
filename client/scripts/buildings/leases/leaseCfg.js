(function(){
  'use strict'

  var Resolve = {
    'model': ['Restangular', function(Restangular){
      return Restangular.one('models').get({name: 'Model', collection: 'lease'});
    }],
    'index':['Restangular', '$route', 'LeaseSvc', function(Restangular, $route, LeaseSvc){
      if (_.has($route.current.params, 'id')){
        var building_id = $route.current.params.id;
        return Restangular
          .one('buildings', building_id)
          .all('leases')
          .getList().$object;
      }
    }]
  }

  function LeaseCfg($routeProvider, $locationProvider){
    var auth = false;
    var path = 'scripts/buildings/leases/views/';

    $routeProvider
      // Index new leases
      .when('/buildings/:id/leases', {
        templateUrl: path + 'leaseForm.tpl.html',
        controller: 'LeaseCtrl',
        resolve: Resolve,
        authenticate: auth });
  }

  LeaseCfg.$inject = ['$routeProvider', '$locationProvider']

  angular.module('buildingMdl')
    .config(LeaseCfg);
})();
