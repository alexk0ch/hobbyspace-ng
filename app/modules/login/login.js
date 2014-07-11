define(function(require) {
	var ng = require('angular');

	require('angular-route');

	var module = ng.module('login', [
		'ngRoute'
	]);

	return module;
});
