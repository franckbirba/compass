describe('Builidng e2e', function() {

  describe('/buildings', function(){
    beforeEach(function(){
      browser.get('/buildings');
      ptor = protractor.getInstance();
    });

    it('loads the correct path', function(){
      expect(ptor.getCurrentUrl()).toMatch('http://localhost:9000/buildings');
    });

    it('has multiple buildings', function() {
      var elems = element.all(by.repeater('building in buildings'));
      elems.first().then(function(elm){
        elm.findElement(by.tagName('h4')).then(function(h4) {
            expect(h4.length() > 1).toBeTruthy();
        });
      });
    });

  });

});

  // it('should warn on missing/malformed credentials', function() {
  //   email.clear();
  //   password.clear();

  //   password.sendKeys('test');
  //   loginButton.click();
  //   expect(error.getText()).toMatch('missing email');

  //   email.sendKeys('test');
  //   loginButton.click();
  //   expect(error.getText()).toMatch('invalid email');

  //   email.sendKeys('@example.com');
  //   password.clear();
  //   loginButton.click();
  //   expect(error.getText()).toMatch('missing password');
  // });

  // it('should accept a valid email address and password', function() {
  //   email.clear();
  //   password.clear();

  //   email.sendKeys('test@example.com');
  //   password.sendKeys('test');
  //   loginButton.click();
  //   expect(browser.getCurrentUrl()).not.toEqual(loginURL);
  // });

  // it('should return to the login page after logout', function() {
  //   var logoutButton = $('a.logout');
  //   logoutButton.click();
  //   expect(browser.getCurrentUrl()).toEqual(loginURL);
  // });
