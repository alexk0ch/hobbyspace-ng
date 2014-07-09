/**
 * Created by oleksandr.kochetov on 7/9/2014.
 */
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
'use strict';

/* Directives */


angular.module('HS.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('HS.services', []).
  value('version', '0.1');

'use strict';

/* Filters */

angular.module('HS.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]);

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
'use strict';

angular.module('HS', [
  'ngRoute',
  'HS.filters',
  'HS.services',
  'HS.directives',
  'HS.controllers'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: ''});
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: ''});
  $routeProvider.when('/register', {templateUrl: 'partials/register.html', controller: ''});
  $routeProvider.when('/events', {templateUrl: 'partials/events.html', controller: ''});
  $routeProvider.when('/profile', {templateUrl: 'partials/profile.html', controller: ''});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
