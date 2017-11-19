(function() {
	'use strict';
	angular.module('techMahindraApp.filters')
		.filter('makeUppercase', function() {
			return function(item) {
				return item.toUpperCase();
			};
		});
}());