define(function(require) {

	var module = require('module!@');

	module.controller('application.controllers.navigation', [
		'$scope',
		'$location',
		function(
			$scope,
			$location
			) {

			angular.extend($scope, {

				isActive: function (viewLocation) {
					return viewLocation === $location.path();
				}

			});
		}
	]);
});