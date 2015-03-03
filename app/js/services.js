var arsenalAppServices = angular.module('arsenalAppServices', ['ngResource']);

arsenalAppServices.factory('club', ['$resource', function($resource){
  return $resource('https://arsenalfcapi.herokuapp.com/api/clubInfo/:id', {id: ''}, {
    getInfo: {method:'GET', isArray:true}
  });
}]);

arsenalAppServices.factory('playerList', ['$resource', function($resource){
  return $resource('https://arsenalfcapi.herokuapp.com/api', {}, {
    updateTable: {method:'GET', isArray:true}
  });
}]);