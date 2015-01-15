var arsenalApp = angular.module('arsenalApp', ['clubControllers', 'ngRoute']);

arsenalApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
  when('/', {
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