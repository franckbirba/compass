exports.config = {
  /**
   * Use `seleniumAddress` for faster startup; run `./node_modules/.bin/webdriver-manager start` to launch the Selenium server.
   * Use `seleniumPort` to let Protractor manage its own Selenium server instance (using the server JAR in its default location).
   */
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // seleniumPort: 4444,

  /**
   * Path to your E2E test files, relative to the location of this configuration file.
   * We're pointing to the directory where our CoffeeScript output goes.
   */
  specs: [
    // test protractor installation.
    'test/client/e2e/**/*.spec.js',
    // run all application module specs.
    'app/scripts/**/**/*.spec.{js,coffee}',
  ],

  /**
   * Properties passed to Selenium -- see https://code.google.com/p/selenium/wiki/DesiredCapabilities for more info.
   */
  capabilities: {
    'browserName': 'chrome'
  },

  /**
   * This should point to your running app instance, for relative path resolution in tests.
   */
  baseUrl: 'http://localhost:9000',

  /**
   * Config Jasmine output format
   */
  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: true,
    showColors: true,
    includeStackTrace: false
  }
};
