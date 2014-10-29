'use strict';

var app = require('../../../server'),
    chai = require('chai'),
    expect = chai.expect,
    mongoose = require('mongoose'),
    User = mongoose.model('User');

var user;

describe.only('User Model', function() {
  before(function(done) {
    user = new User({
      provider: 'local',
      name: 'Fake User',
      email: 'test@test.com',
      password: 'password'
    });

    // Clear users before testing
    User.remove().exec();
    done();
  });

  afterEach(function(done) {
    User.remove().exec();
    done();
  });

  it('begins with no users', function(done) {
    User.find({}, function(err, users) {
      expect(users.length).to.equal(0)
      done();
    });
  });

  it('fails when saving a duplicate user', function(done) {
    user.save();
    var userDup = new User(user);
    userDup.save(function(err) {
      expect(err).to.exist;
      done();
    });
  });

  it('fails when saving without an email', function(done) {
    user.email = '';
    user.save(function(err) {
      expect(err).to.exist;
      done();
    });
  });

  it("authenticates user if password is valid", function() {
    expect(user.authenticate('password')).to.be.true;
  });

  it("fails user authentication if password is invalid", function() {
    expect(user.authenticate('blah')).to.not.be.true;
  });

});
