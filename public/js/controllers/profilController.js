// PROFIL CONTROLLER
function profilController($scope, $http, $rootScope, connexionService) {

  $scope.user = $rootScope.userId;

  $scope.update = function () {
    connexionService.update($scope.user._id ,$scope.user).then(function (res) {
        load();
    });
  }
}
