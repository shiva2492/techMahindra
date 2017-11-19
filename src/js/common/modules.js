(function() {
	'use strict';
	angular.module('techMahindraApp.directives', []);
	angular.module('techMahindraApp.services', []);
	angular.module('techMahindraApp.filters', []);
	angular.module('techMahindraApp.constants', []);
	angular.module('techMahindraApp.controllers', ['techMahindraApp.filters', 'techMahindraApp.services', 'techMahindraApp.directives', 'techMahindraApp.constants']);
}());