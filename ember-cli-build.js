/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Import bootstrap so our application has access to it
  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  return app.toTree();
};
