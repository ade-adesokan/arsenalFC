var arsenalApp = angular.module('arsenalApp', ['clubControllers', 'ngRoute', 'arsenalAppServices']);

arsenalApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
  when('/arsenalFC', {
    templateUrl: 'partials/homepage.html',
    controller: 'HomepageController'
  }).
  when('/arsenalFC/players', {
    templateUrl: 'partials/playerList.html',
    controller: 'PlayerListController'
  }).
  when('/arsenalFC/newPlayer', {
    templateUrl: 'partials/addNewPlayer.html',
    controller: 'NewPlayerController'
  }).
  otherwise({
    redirectTo: '/arsenalFC'
  });

}]);