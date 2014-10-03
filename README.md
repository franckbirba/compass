# tornado

The best project ever.

## Getting Started
Install the module with: `npm install tornado`

```javascript
var tornado = require('tornado');
tornado.awesome(); // "awesome"
```

## Documentation
 Prerequisites
 make sure you have (install otherwise) mongodb, node.js, npm, ruby & compass, grunt-cli, bower, mongodb
 Launch the project
 ```
 $ mongod
 $ git clone <project>
 $ npm install
 $ bower install
 $ cd app && bower install
 $ cd .. && grunt serve
```

## Testing
  E2E
  using protractor. Dependencies will be installed with
  ''''
  $ npm install
  ''''
  Run the Selenium installation script.
  ''''
  $ ./node_modules/protractor/bin/webdriver-manager update
  ''''
  To run the test:
    1. Start the seperate selium server
    ''''
    $ ./node_modules/protractor/bin/webdriver-manager start
    2. In a new shell launch Protractor to actually run the tests
    ''''
    $ ./node_modules/protractor/bin/protractor protractor_e2e_conf.js
    NB: make sure to run grunt serve before launching ptor tests.



## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Fulanke
Licensed under the MIT license.
