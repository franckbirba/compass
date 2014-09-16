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

    function Adress(params){
      var params = params || {};
      this.adresse = params.adresse;
      this.cp      = params.cp;
      this.ville   = params.ville;
      this.sector  = params.sector;
      this.pays    = params.pays;
    }

    // function Building(params){
    //   var params = params || {adress: {}};
    //   this.name       = params.name;
    //   this.portofolio = params.portofolio;
    //   this.adress     = new Adress(params.adress);
    //   this.year       = params.year;
    //   this.controle   = ['(vide)', 'Pleine propriété', 'Co-propriété'];
    //   this.user       = ['(vide)', 'Own use', 'Locataire'];
    //   this.surface    = params.surface;
    //   this.images     = DUMMY.images;
    // }

    // Building.prototype.getImages = function(){ return this.images };
    // Building.prototype.addImage = function(img){ this.images.push(img) };
    // Building.prototype.delImage = function(idx){ this.images.splice(idx, 1) };

    // // Public API here
    // return {
    //   getMap: function() {
    //     return map;
    //   },
    //   getCerts: function(){
    //     return certs;
    //   },
    //   getUsageTypes: function(){
    //     return usage_types;
    //   },
    //   newBuilding: function(params){
    //     return new Building(params);
    //   },
    // };

    var Building = Restangular.service('building');

    Restangular.extendModel('building', function(model){
      return angular.extend(model, {
        name: '',
        portfolio: '',
        address: new Adress(),
        year: '',
        controle: '',
        user: '',
        surface: '',
        images: DUMMY.images
      });
    });

    return Building;
  });
