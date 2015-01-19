var arsenalApp = angular.module('arsenalApp', ['clubControllers', 'ngRoute', 'arsenalAppServices']);

arsenalApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
  when('/home', {
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
    redirectTo: '/home'
  });

}]);