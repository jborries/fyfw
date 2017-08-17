myAppModule.controller("TeamsController", ["$scope", "PlayerFactory", function($scope, TeamFactory){
   $scope.teams = [];

   //When this controller is loaded, fetch the team list
   TeamFactory.getTeams(function(teams){
      $scope.teams = teams;
   })

   //Pass new team info to the TeamFactory
   $scope.addTeam = function(team){

      TeamFactory.addTeam(team)
      TeamFactory.teams = $scope.teams;


      console.log(team)
      //$scope.newTeam = {}; //Reset newTeam form
   }

   //Pass $index to TeamFactory to remove
   $scope.removeTeam = function($index){
      TeamFactory.removeTeam($index);
   }
}])
