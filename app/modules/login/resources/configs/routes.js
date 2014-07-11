define(function(require) {

	return function(module){
		var module = require('module!@');

		module.config([
			'$routeProvider',
			function($routeProvider) {

				$routeProvider.when('/login', {
					template: require('template!login'),
					controller: 'login.controllers.login'
				});

				$routeProvider.when('/register', {
					template: require('template!register'),
					controller: 'login.controllers.register'
				});

			}
		]);
	}
});
