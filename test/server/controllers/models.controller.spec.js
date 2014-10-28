'use strict';

var app = require('../../../server'),
    expect = require('chai').expect,
    request = require('supertest');

describe.only('GET /crud/models', function() {
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
