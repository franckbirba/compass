describe('Protractor test', function() {

  // var email = element(by.name('login-email'));
  // var password = element(by.name('login-password'));
  // var loginButton = element(by.xpath('//form[1]/input[@type="submit"]'));
  // var error = element(by.model('loginError'));

  it('it runs a test from within app', function() {
    browser.get('/');
    expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/');
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
});
