// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'https://maps.googleapis.com/maps/api/js?sensor=false',
      'test/client/mocks/*.js',
      'app/bower_components/lodash/dist/lodash.compat.js',
      'app/bower_components/underscore/underscore.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-cookies/angular-cookies.js',
      'app/bower_components/angular-sanitize/angular-sanitize.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'app/bower_components/angular-xeditable/dist/js/xeditable.js',
      'app/bower_components/angular-tablesort/js/angular-tablesort.js',
      'app/bower_components/google-code-prettify/src/prettify.js',
      'app/bower_components/angular-google-maps/dist/angular-google-maps.js',
      'app/bower_components/restangular/dist/restangular.js',
      'app/bower_components/ngstorage/ngStorage.min.js',
      'app/bower_components/angular-translate/angular-translate.js',

      'app/scripts/*.js',
      'app/scripts/utils/*.js',
      'app/config/settingsConf.js',
      'app/config/*.js',
      'app/scripts/observatory/observatoryMdl.js',
      'app/scripts/observatory/*.js',
      'app/scripts/controllers/*.js',
      'app/scripts/directives/*.js',
      'app/scripts/services/*.js',

      // 'test/client/mock/**/*.js',
      // 'test/client/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: ['*.origin'],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
