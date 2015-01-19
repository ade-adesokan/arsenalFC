var clubControllers = angular.module('clubControllers', []);

HomepageController = clubControllers.controller('HomepageController', ['$scope', '$http', 'club', function ($scope, $http, club) {
  $scope.homepageOverlay = true;
  $scope.editHomepageOverlay = true;

  $('#home a img').mouseenter(function () {
    $(this).addClass('logo-hover').removeClass('logo');
  });

  $('#home a img').mouseleave(function () {
    $(this).addClass('logo').removeClass('logo-hover');
  });

  $scope.checkInfo = function() {
    $scope.information = club.getInfo();
    console.log($scope.information);
    $scope.homepageOverlay = false;
  }
  $scope.hideInfo = function (){
    $scope.homepageOverlay = true;
  }
  $scope.editInfo = function(id, info){
    $scope.homepageOverlay = true;
    $scope.id = id; 
    $scope.newClubInfo = info;
    $scope.editHomepageOverlay = false;
  }
  $scope.editClubInfo = function () {
    
    $http({
      method  : 'PUT',
      url     : 'https://arsenalfcapi.herokuapp.com/api/clubInfo/' + $scope.id,
      data    : $.param({clubInfo: $scope.newClubInfo}),  
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
     }
    ).success(function () {
      console.log('Club information edited'); 
      $scope.editHomepageOverlay = true;
    })
    .error(function () {
      console.log('Error occured');
    });
  };

}]);

PlayerListController = clubControllers.controller('PlayerListController', ['$scope', '$http', 'playerList', function ($scope, $http, playerList) {

  $scope.overlay = true;
  $scope.editOverlay = true;

  

  var tableUpdate = function () {
    $scope.players = playerList.updateTable();
  };
  
  tableUpdate(); 
  
  

  $scope.viewPlayerInfo = function (playerName) {
    
    $http.get('https://arsenalfcapi.herokuapp.com/api/' + playerName).success( function (data) {
      $scope.player = data;
      console.log($scope.player);
      $scope.overlay = false;
    }).error(function () {
      console.log('Error occured, couldnt get player Info');
    });

  }

  $scope.edit = function (name, newName, newAge, newJerseyNumber, newPosition, newNumberOfGoals, newCountry, newRating, newImageURL) {
      $scope.PlayerName = name;
      $scope.newName = newName;
      $scope.newAge = newAge;
      $scope.newJerseyNumber = newJerseyNumber;
      $scope.newPosition = newPosition;
      $scope.newNumberOfGoals = newNumberOfGoals;
      $scope.newCountry = newCountry;
      $scope.newRating = newRating;
      $scope.newImageURL = newImageURL;
      $scope.editOverlay = false;      
    }

  $scope.editPlayerInfo = function () {
    
    $http({
      method  : 'PUT',
      url     : 'https://arsenalfcapi.herokuapp.com/api/' + $scope.PlayerName,
      data    : $.param({name: $scope.newName, age: $scope.newAge, jerseyNumber: $scope.newJerseyNumber, position: $scope.newPosition, numberOfGoals: $scope.newNumberOfGoals, country: $scope.newCountry, rating: $scope.newRating, imageURL: $scope.newImageURL}),  
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

NewPlayerController = clubControllers.controller('NewPlayerController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

  $('#uploadForm').submit(function () {
    
    
    $location.path('/newPlayer');
  });
 

  $scope.addPlayer = function () {
    if($scope.name){
      $http({
        method  : 'POST',
        url     : 'https://arsenalfcapi.herokuapp.com/api',
        data    : $.param({name: $scope.name, age: $scope.age, jerseyNumber: $scope.jerseyNumber, position: $scope.position, numberOfGoals: $scope.numberOfGoals, country: $scope.country, rating: $scope.rating, imageURL: $scope.imageURL}),  
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
       }
      ).success(function () {
        console.log('New player added'); 
        $location.path('/players');  
      })
      .error(function () {
        console.log('Error occured');
      });
    } else {
      alert('Complete the form!!');
    }
  };
}]);





