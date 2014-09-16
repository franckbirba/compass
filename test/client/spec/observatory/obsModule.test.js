'use strict';

describe('ObsModule: observatoryModule', function () {

  // load the service's module
  var tornadoConfig;
  beforeEach(function(){
    angular.mock.module('tornadoConfig');
    angular.mock.module('observatoryModule');
    inject(function(_tornadoConfig_){
      tornadoConfig = _tornadoConfig_;
    })
  });

  it('should map routes to controllers', function() {

    inject(function($route) {
      expect($route.routes['/observatory'].controller).toBe('ObservatoryCtrl');
      expect($route.routes['/observatory'].templateUrl).
        toEqual('scripts/observatory/views/observatory.tpl.html');
      // expect($route.routes['/phones/:phoneId'].templateUrl).
      //   toEqual('partials/phone-detail.html');
      // expect($route.routes['/phones/:phoneId'].controller).
      //   toEqual('PhoneDetailCtrl');

      // otherwise redirect to
      expect($route.routes[null].redirectTo).toEqual('/observatory');
    });
  });


});
