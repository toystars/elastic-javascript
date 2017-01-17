/*!
 * elastic-javascript
 * Copyright(c) 2016 Mustapha Babatunde Oluwaleke
 * MIT Licensed
 */



'use strict';

/**
 * Module dependencies.
 */

var MongoSync = require('./router/route');



/**
 * Initialize the elastic-javascript application.
 *
 * @return {Object}
 * @api public
 */

var initApplication = function () {

  var app = {};

  app.configure = function (configObject) {

  };

  return app;
};





/*
 *
 * Expose `initApplication()`.
 *
 * */
module.exports = initApplication;
