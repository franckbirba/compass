'use strict';

describe('ObsModule: BuildingCtrl', function () {

  // load the service's module

  var Building;

  beforeEach(function(){
    angular.mock.module('observatoryModule')
    inject(function(_BuildingCtrl_){
      Building = _BuildingCtrl_;
    })
  });

  // it('returns a new Rest building object', function() {
  //   expect(Building.hasOwnProperty('getList')).toEqual(true);
  // });

  // it('has extended properties', function() {
  //   Building.name = 'building1';
  //   expect(Building.name).toEqual('building1');
  // });

  // it('has DUMMY properties', function(){
  //   expect(Building.images[0].src).toEqual('http://www.zepros.fr/img_articles/images/articles/bati/actu/BZP1%20Reg%20GO%20Bepos%20Tours2.jpg')
  // })

});
