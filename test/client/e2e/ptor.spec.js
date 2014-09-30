describe('Protractor test', function() {

  it('it runs a test', function() {
    browser.get('/');
    expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/');
  });

});
