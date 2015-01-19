var arsenalApp = angular.module('arsenalApp', ['clubControllers', 'ngRoute', 'arsenalAppServices']);


arsenalApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.
  when('/', {
    templateUrl: 'partials/homepage.html',
    controller: 'HomepageController'
  }).
  when('/players', {
    templateUrl: 'partials/playerList.html',
    controller: 'PlayerListController'
  }).
  when('/newPlayer', {
    templateUrl: 'partials/addNewPlayer.html',
    controller: 'NewPlayerController'
  }).
  otherwise({
    redirectTo: '/'
  });

}]);