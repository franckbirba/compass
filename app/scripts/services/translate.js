angular.module('compassApp')
  .config(function($translateProvider) {
    // Our translations will go in here
    $translateProvider.translations('en', {
        HEADLINE: 'Welcome to e-portfolio'
      });
      
    $translateProvider.translations('fr', {
          HEADLINE: 'Bienvenu sur e-portfolio'
        });
    $translateProvider.preferredLanguage('fr');
})
.controller('TranslateController', function($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    if(!langKey)
      $translate.use($scope.selectLang.value);
    else
      $translate.use(langKey);
  };

  $scope.LANG = [
      {
        name: 'français',
        value: 'fr'
      },
      {
        name: 'english',
        value: 'en'
      }
    ];

  $scope.selectLang = $scope.LANG[0];
});