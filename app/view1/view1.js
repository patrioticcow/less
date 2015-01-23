'use strict';

angular.module('myApp.view1', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'view1/view1.html',
			controller: 'View1Ctrl'
		});
	}])

	.controller('View1Ctrl', function ($scope) {

		$scope.setColor = function (val) {
			console.log(val);
		};


		var $red = angular.element(document.getElementById('red'));
		console.log($red);
	});