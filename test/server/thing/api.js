// 'use strict';
//
// var app = require('../../../server'),
//     chai = require('chai'),
//     expect = chai.expect,
//     request = require('supertest');
//
// describe('GET /crud/portfolios', function() {
//
//   it('should respond with JSON array', function(done) {
//     request(app)
//       .get('/crud/portfolios')
//       .expect(200)
//       .expect('Content-Type', /json/)
//       .end(function(err, res) {
//         if (err) return done(err);
//         expect(res.body).to.be.instanceof(Array);
//         done();
//       });
//   });
// });
