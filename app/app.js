define(function(require) {

	require('modules/application/application-includes');
	require('modules/login/login-includes');

	var ng = require('angular');

	var name = 'HS';
	var app = ng.module(name, [
	'application',
	'login'
	]);

	ng.element(document)
	.ready(function()
	  {
	    var root = ng.element(document.querySelector('#' + name));

	    ng.bootstrap(root, [name]);
	    console.timeEnd('application loading');
	  });

	require('jquery');
	require('jq-headroom');

});
