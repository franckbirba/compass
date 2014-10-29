'use strict';

var app = require('../../../server'),
    expect = require('chai').expect,
    request = require('supertest');



describe('POST /api/session', function() {
  beforeEach(function(){
    app
  })
  it('should not accept login', function(done) {
    request(app)
      .post('/api/session')
      .expect(401)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body).to.be.instanceof(Object);
        done();
      });
  });
});


describe('POST /api/session', function() {
  beforeEach(function(){
    app
  })
  it('should accept login', function(done) {
    request(app)
      .post('/api/session').set('Accept', 'application/json').send({"usermail":"test@test.com", "password":"test"})
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        console.log(res.body);
        expect(res.body).to.be.instanceof(Object);
        done();
      });
  });
});

/*describe('GET /crud/models', function() {
  beforeEach(function(){
    app
  })
  it('should respond with JSON array', function(done) {
    request(app)
      .get('/crud/models?name=Model&collection=building')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        console.log(res);
        if (err) return done(err);
        expect(res.body).to.be.instanceof(Array);
        done();
      });
  });
});

*/

//crud/models
//crud/portfolios
//crud/buildings
//crud/leases
//login
//logout