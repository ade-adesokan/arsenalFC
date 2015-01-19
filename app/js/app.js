var arsenalApp = angular.module('arsenalApp', ['clubControllers', 'ngRoute', 'arsenalAppServices']);

arsenalApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
  when('/arsenalFC/app/#/', {
    templateUrl: 'partials/homepage.html',
    controller: 'HomepageController'
  }).
  when('/arsenalFC/app/#/players', {
    templateUrl: 'partials/playerList.html',
    controller: 'PlayerListController'
  }).
  when('/arsenalFC/app/#/newPlayer', {
    templateUrl: 'partials/addNewPlayer.html',
    controller: 'NewPlayerController'
  }).
  otherwise({
    redirectTo: '/arsenalFC/app/#/'
  });

}]);