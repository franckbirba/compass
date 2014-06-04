'use strict';

angular.module('compassApp')
  .controller('BuildingCtrl', function ($scope, Auth, $location) {
    
  $scope.map = {
      center: {
          latitude: 45,
          longitude: -73
      },
      zoom: 8
  };

  $scope.IMAGES = [
    {
      src: "http://www.zepros.fr/img_articles/images/articles/bati/actu/BZP1%20Reg%20GO%20Bepos%20Tours2.jpg"
    },
    {
      src: "http://acifmantoue.e-monsite.com/medias/images/faure-ingenierie-batiment-251544-1.jpg"
    },
    {
      src: "http://dtxtq4w60xqpw.cloudfront.net/sites/all/files/photocontest2012/untitled-1copy.jpg"
    }
  ]
});