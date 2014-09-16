'use strict';

/**
 * @ngdoc service
 * @name tornadoApp.buildingSvc
 * @description
 * # buildingSvc
 * Factory in the tornadoApp.
 */

angular.module('buildingMdl')
  .factory('BuildingSvc', function BuildingSvc(Restangular, DUMMY) {
    // var map = DUMMY.map;
    // var certs = DUMMY.certs;
    // var usage_types = DUMMY.usage_types;
    var resource = 'buildings';

    function Address(params){
      var params = params || {};
      this.address1 = params.address1;
      this.address1 = params.address2;
      this.city     = params.city;
      this.zipcode  = params.zipcode;
      this.area     = params.area;
      this.country  = params.country;
      this.gps      = params.gps;
    }

    var Building = Restangular.service(resource);

    Restangular.extendModel(resource, function(model){
      return angular.extend(model, {
          "address": new Address(),
          "building_user":   "",
          "built_year":  "",
          "control":  "",
          "floors":   "",
          "name":   "",
          "parking_surface":   "",
          "parkings":   "",
          "portfolio":  "",
          "property":   "",
          "total_surface":   "",
          "useful_surface":  "",
          "user":   "",
          "hqe":  "",
          "images": []
        });
    });

    function createBuilding(params){
      var elem = Restangular.one(resource);
      angular.extend(elem, params);
      return elem.post().then(function(res){
        elem.id = res._id;
        return elem;
      })
    }

    function get(id){
      return Restangular.one(resource, id).get()
    }

    return {
      rest: Building,
      get: get,
      createBuilding: createBuilding
    }
  });
