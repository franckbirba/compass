'use strict';

describe('Service: buildingService', function () {

  // load the service's module
  beforeEach(module('tornadoApp'));

  // instantiate service
  var buildingService;
  beforeEach(inject(function (_buildingService_) {
    buildingService = _buildingService_;
  }));

  it('should do something', function () {
    expect(!!buildingService).toBe(true);
  });

});
