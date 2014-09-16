'use strict';

describe('ObsModule: observatoryModule', function () {

  // load the service's module
  beforeEach(angular.mock.module('observatoryModule'));

  it('should map routes to controllers', function() {
    // angular.modmodule('observatoryModule');

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
