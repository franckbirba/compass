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
  ];

  $scope.CERTS = [
    {
      src: "http://www.ffbatiment.fr/Files/pub/Fede_N00/MINISITE_ECO_CONSTRUCTION_3374/4ee8529f4d2d460db2121e9104f1f3b3/EDIT/logo_nf_service_batiment.png"
    },
    {
      src: "http://www.bio-teknik-consulting.com/wp-content/uploads/2010/05/logo_effinergie.jpg"
    },
    {
      src: "http://www.gerflor.fr/cache/media/20-environnement/logos-environnement/leed_72dpi/s,180,300-eb11e7.png"
    },
    {
      src: "http://www.ffbatiment.fr/Files/pub/Fede_N00/MINISITE_ECO_CONSTRUCTION_3374/4ee8529f4d2d460db2121e9104f1f3b3/EDIT/logo_nf_service_batiment.png"
    },
    {
      src: "http://www.bio-teknik-consulting.com/wp-content/uploads/2010/05/logo_effinergie.jpg"
    },
    {
      src: "http://www.gerflor.fr/cache/media/20-environnement/logos-environnement/leed_72dpi/s,180,300-eb11e7.png"
    }
  ]
});