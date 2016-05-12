// CARTE CONTROLLER
function carteController($scope, $http, $rootScope) {
  $scope.connexion = $rootScope.userId;
  console.log($scope.connexion.userEmail);
}
