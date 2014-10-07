'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    portfolios = require('./controllers/portfolios'),
    session = require('./controllers/session'),
    middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes

  app.route('/api/users')
    .post(users.create)
    .put(users.changePassword);
  app.route('/api/users/me')
    .get(users.me);
  app.route('/api/users/:id')
    .get(users.show);
  app.route('/api/session')
    .post(session.login)
    .delete(session.logout);

  app.route('/crud/:collection/')
    .get(api.crud)
    .put(api.crud)
    .post(api.crud)
    .delete(api.crud);

  app.route('/crud/:collection/:id')
    .get(api.crud)
    .put(api.crud)
    .post(api.crud)
    .delete(api.crud);

  app.route('/crud/portfolios/:id/buildings')
    .get(api.crud)
    .post(api.crud)
    .put(api.crud)
    .delete(api.crud);

  app.route('/crud/buildings/:id/leases')
    .get(api.crud)
    .post(api.crud)
    .put(api.crud)
    .delete(api.crud);

   app.route('/crud/:collection/:id')
    .get(api.crud)
    .put(api.crud)
    .post(api.crud)
    .delete(api.crud);


 app.route('/crud/:collection')
    .get(api.crud)
    .post(api.crud)
    .put(api.crud)
    .delete(api.crud);

  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(function(req, res) {
      res.send(404);
    });

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/partials/*')
    .get(index.partials);
  app.route('/*')
    .get( middleware.setUserCookie, index.index);
};
