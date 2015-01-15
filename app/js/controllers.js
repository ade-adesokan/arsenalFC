var clubControllers = angular.module('clubControllers', []);

PlayerListController = clubControllers.controller('PlayerListController', ['$scope', '$http', function ($scope, $http) {

  $scope.overlay = true;
  $scope.editOverlay = true;

  

  var tableUpdate = function () {
    $http.get('https://arsenalfcapi.herokuapp.com/api').success( function (data) {
      $scope.players = data;
      console.log($scope.players);
    }).error(function () {
      console.log('Error occured, couldnt get');
    });
  };
  
  tableUpdate(); 
  
  

  $scope.viewPlayerInfo = function (playerName) {
    
    $http.get('https://arsenalfcapi.herokuapp.com/api/' + playerName).success( function (data) {
      $scope.player = data;
      console.log($scope.player);
      $scope.overlay = false;
    }).error(function () {
      console.log('Error occured, couldnt get');
    });

  }

  $scope.edit = function (name, newName, newAge, newJerseyNumber, newPosition, newNumberOfGoals, newCountry, newRating) {
      $scope.PlayerName = name;
      $scope.newName = newName;
      $scope.newAge = newAge;
      $scope.newJerseyNumber = newJerseyNumber;
      $scope.newPosition = newPosition;
      $scope.newNumberOfGoals = newNumberOfGoals;
      $scope.newCountry = newCountry;
      $scope.newRating = newRating;
      $scope.editOverlay = false;      
    }

  $scope.editPlayerInfo = function () {
    
    $http({
      method  : 'PUT',
      url     : 'https://arsenalfcapi.herokuapp.com/api/' + $scope.PlayerName,
      data    : $.param({name: $scope.newName, age: $scope.newAge, jerseyNumber: $scope.newJerseyNumber, position: $scope.newPosition, numberOfGoals: $scope.newNumberOfGoals, country: $scope.newCountry, rating: $scope.newRating}),  
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
     }
    ).success(function () {
      console.log('Player edited'); 
      $scope.editOverlay = true; 
      tableUpdate();       
    })
    .error(function () {
      console.log('Error occured');
    });
  };

  $scope.close = function () {
    $scope.overlay = true;
  };
}]);

NewPlayerController = clubControllers.controller('NewPlayerController', ['$scope', '$http', function ($scope, $http) {

  $scope.addPlayer = function () {
    $http({
      method  : 'POST',
      url     : 'https://arsenalfcapi.herokuapp.com/api',
      data    : $.param({name: $scope.name, age: $scope.age, jerseyNumber: $scope.jerseyNumber, position: $scope.position, numberOfGoals: $scope.numberOfGoals, country: $scope.country, rating: $scope.rating, link:''}),  
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
     }
    ).success(function () {
      console.log('New player added');   
    })
    .error(function () {
      console.log('Error occured');
    });
  };
}]);





