// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: 'client/scripts',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['mocha', 'chai'],

    // list of files / patterns to load in the browser
    files: [
      // #3rd Party Code
      '../bower_components/angular/angular.js',
      '../bower_components/angular-mocks/angular-mocks.js',
      '../bower_components/angular-route/angular-route.min.js',
      '../bower_components/angular-resource/angular-resource.min.js',
      '../bower_components/restangular/dist/restangular.min.js',
      '../config/settingsConf.js',
      '../config/*.js',

      // # Application code
      // '{**, }*.js',

      'zombies/*.js',

      // # Test code
      'zombies/tests/*.spec.coffee'
    ],

    // list of files / patterns to exclude
    exclude: [
      '{**, }*.old.js',
      '*.origin',
      'buildings/*.e2e.js',
      '{**, }*.e2e.js'

    ],

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
    singleRun: false,

    // Conmpile coffee scripts
    preprocessors: {
      '**/*.spec.coffee': ['coffee']
    },

    coffeePreprocessor: {
      // options passed to the coffee compiler
      options: {
        bare: true,
        sourceMap: false
      },
      // transforming the filenames
      transformPath: function(path) {
        return path.replace(/\.coffee$/, '.js');
      }
    }
  });
};
