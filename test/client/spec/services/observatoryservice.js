'use strict';

describe('Service: observatoryService', function () {

  // load the service's module
  beforeEach(module('tornadoApp'));

  // instantiate service
  var observatoryService;
  beforeEach(inject(function (_observatoryService_) {
    observatoryService = _observatoryService_;
  }));

  it('should do something', function () {
    expect(!!observatoryService).toBe(true);
  });

});
