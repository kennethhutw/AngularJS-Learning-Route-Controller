//Define an angular module for our app
var sampleApp = angular.module('sampleApp', ['HomeApp','MemberApp']);

/*
	** Todo-Sortable-List Example App
	** Licensed under the Apache License v2.0
	** http://www.apache.org/licenses/LICENSE-2.0
	** Built by Kenneth Hu (Kenneth_hu@hotmail.com)
	*/
//Define Routing for app
//Uri /Home -> template Home.html and Controller HomeCtrl
//Uri /Alan -> template Alan.html and Controller AlanCtrl
//Uri /Bill -> template Bill.html and Controller BillCtrl
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Alan', {
	templateUrl: 'templates/Alan.html',
	controller: 'AlanCtrl'
      }).
      when('/Bill', {
	templateUrl: 'templates/Bill.html',
	controller: 'BillCtrl'
      }).
	 when('/', {
	templateUrl: 'home.html',
	controller: 'HomeCtrl'
      }).
	   when('/Home', {
	templateUrl: 'Home.html',
	controller: 'HomeCtrl'
      }).
      otherwise({
	redirectTo: '/'
      });
}]);




