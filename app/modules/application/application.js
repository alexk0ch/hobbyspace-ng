define(function(require) {
	var ng = require('angular');

	require('angular-route');

	var module = ng.module('application', [
	'ngRoute'
	]);

	jQuery(document).ready(function($) {
		$(".headroom").headroom({
			"tolerance": 20,
			"offset": 50,
			"classes": {
				"initial": "animated",
				"pinned": "slideDown",
				"unpinned": "slideUp"
			}
		});
	});

	return module;
});
