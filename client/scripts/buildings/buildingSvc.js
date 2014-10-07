'use strict';

/**
 * @ngdoc service
 * @name tornadoApp.buildingSvc
 * @description
 * # buildingSvc
 * Factory in the tornadoApp.
 */




angular.module('buildingMdl')
  .factory('BuildingSvc', function BuildingSvc($http, Restangular, DUMMY) {
    // var map = DUMMY.map;
    // var certs = DUMMY.certs;
    // var usage_types = DUMMY.usage_types;
    var resource = 'buildings';

    var BuildingObj = {
      "_id": null,
      "portfolio_id": null,
      "name": null,
      "type": null,
      "address": {
        "address1": null,
        "address2": null,
        "city": null,
        "zip_code": null,
        "area": null,
        "country": null,
        "gps_long": null,
        "gps_lat": null
      },
      "images": [],
      "leases": [],
      "info": {
        "construction_year": null,
        "control": {"full": null, "shared": null},
        "user": {"own_use": null, "rented": null},
        "area_total": null,
        "area_usefull": null,
        "floors": null,
        "parking_spaces": null,
        "parking_surface": null
      }
    }

    var Buildings = Restangular.service(resource);


    function createBuilding(params){
      var elem = Restangular.one(resource);
      angular.extend(elem, params);
      return elem.post().then(function(res){
        elem._id = res._id;
        return elem;
      })
    }

    function getOne(id){
      return Restangular.one(resource, id).get().$object
    }

    function getBuilding(){
      $http.get('data/building_object.json').then(function(res){
        return res
      });
    }

    return {
      buildingObj: BuildingObj,
      rest: Buildings,
      get: getOne,
      createBuilding: createBuilding
    }
  });
