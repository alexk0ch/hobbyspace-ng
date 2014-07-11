/**
 * Load all dependencies for module
 */
define(function(require) {

	var module = require('module!@');

	require('module!controller/login');
	require('module!controller/register');
	require('config!main')(module);
});
