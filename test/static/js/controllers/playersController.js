myAppModule.controller("PlayersController", ["$scope", "PlayerFactory", function($scope, PlayerFactory){
   $scope.players = [];

   //When this controller is loaded, fetch the player list
   PlayerFactory.getPlayers(function(players){
      $scope.players = players;
   })

   //Pass new player info to the PlayerFactory
   $scope.addPlayer = function(){
      PlayerFactory.addPlayer($scope.newPlayer)
      console.log($scope.newPlayer)
      $scope.newPlayer = {}; //Reset newPlayer form

   }

   //Pass $index to PlayerFactory to remove
   $scope.removePlayer = function($index){
      PlayerFactory.removePlayer($index);
   }
}])
