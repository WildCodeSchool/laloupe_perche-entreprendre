// USER CONTROLLER
function userController($scope, $http, userService, $rootScope, $location) {
  $('html, body').animate({ scrollTop: 0 }, 'swing');
  $rootScope.connect = 0;


      $scope.add = function () {
          var data = {};
          data.userVille = $scope.userVille;
          data.userFunction = $scope.userFunction;
          data.userEmail = $scope.userEmail;
          data.userNote = $scope.userNote;
          data.userMdp = $scope.userMdp;
          data.userName = $scope.userName;
          data.userFirstname = $scope.userFirstname;
          data.userEnterprise = $scope.userEnterprise;
          data.userPhone = $scope.userPhone;

          userService.create(data).then(function (res) {
              load();
          });
          $scope.userEmail = "";
          $scope.userMdp = "";
          $scope.userVille = "";
          $scope.userName = "";
          $scope.userFunction = "";
          $scope.userNote = "";
          $scope.userEnterprise = "";
          $scope.userFirstname = "";
          $scope.userPhone = "";
      }
}
