'use strict';

/* Controllers */

angular.module('HS.controllers', [])
	.controller('Navigation', ['$scope', '$location', function($scope, $location) {
		$scope.isActive = function (viewLocation) {
			return viewLocation === $location.path();
		};
		$scope.currentLocation = function () {
			var loc = $location.path().slice(1);
			return loc[0].toUpperCase() + loc.substring(1);
		};
	}
	]);