angular.module('compassApp')
  .config(function($translateProvider) {
    // Our translations will go in here
    $translateProvider.translations('en', {
        HEADLINE: 'Hello there, This is my awesome app!',
        INTRO_TEXT: 'And it has i18n support!',
        BUTTON_TEXT_EN: 'english',
        BUTTON_TEXT_FR: 'french'
      });
      
    $translateProvider.translations('fr', {
          HEADLINE: 'Salut, cette appli est géniale!',
          INTRO_TEXT: 'Et elle supporte i18n!',
          BUTTON_TEXT_EN: 'anglais',
          BUTTON_TEXT_FR: 'français'
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