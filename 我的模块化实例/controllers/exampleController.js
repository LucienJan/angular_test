;
(function() {
	var controllerModule = angular.module("exapmleApp.Controllers", []);
	controllerModule.controller("mycontrol", function($scope) {
		$scope.auther = "This page is written by LucienJan";
	})
})()