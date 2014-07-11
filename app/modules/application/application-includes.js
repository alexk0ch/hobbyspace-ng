/**
 * Load all dependencies for module
 */
define(function(require) {

  var module = require('module!@');

  require('module!controller/navigation');
  require('config!main')(module);
});
