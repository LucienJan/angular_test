var app = angular.module("demo",['ui.router']);
app.config(function($stateProvider){
	$stateProvider.state('index',{
		url:'/index',
		templateUrl:'template/index.html'
	})
	.state('index.page1',{
		url:'/page1',
		templateUrl:'template/page1.html',
		controller:'page1Ctrl'
	})
});





app.controller('page1Ctrl',function($scope){
	$scope.name = 'lucien'
})
