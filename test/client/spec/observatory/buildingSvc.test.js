'use strict';

describe('ObsModule: BuildingSvc', function () {

  // load the service's module

  beforeEach(function(){
    var BuildingSvc;
    angular.mock.module('observatoryModule');
    inject(function(_BuildingSvc_){
      BuildingSvc = _BuildingSvc_;
    })
  });

  it('should return an object', function() {
  });

});
