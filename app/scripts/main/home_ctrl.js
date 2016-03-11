define(function() {
	'use strict';

	homeCrtl.$inject = ['$scope'];

	function homeCrtl($scope) {
		$scope.message = 'Welcome to Home Page';
	}

	return homeCrtl;
});