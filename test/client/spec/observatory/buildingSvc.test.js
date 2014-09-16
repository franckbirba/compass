'use strict';

describe('ObsModule: BuildingSvc', function () {

  // load the service's module

  var Building,
      Restangular;

  beforeEach(function(){
    angular.mock.module('observatoryModule')
    inject(function(_buildingService_){
      Building = _buildingService_;
    })
  });

  it('returns a new Rest building object', function() {
    expect(Building.hasOwnProperty('getList')).toEqual(true);
  });

  it('has extended properties', function() {
    Building.name = 'building1';
    expect(Building.name).toEqual('building1');
  });

  it('has DUMMY properties', function(){
    expect(Building.images[0].src).toEqual('http://www.zepros.fr/img_articles/images/articles/bati/actu/BZP1%20Reg%20GO%20Bepos%20Tours2.jpg')
  })

});
