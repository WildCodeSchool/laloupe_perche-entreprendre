// PROFIL CONTROLLER

function profilController($scope, $http, $rootScope, userService) {


  $scope.update = function () {
    userService.update(id ,$scope.user).then(function (res) {
    });
  }

    //  ------------   Flow   -----------



    $scope.processFiles = function (files) {
      angular.forEach(files, function (flowFile, i) {
        var fileReader = new FileReader();
        fileReader.onload = function (event) {
          var uri = event.target.result;
          $scope.user.userImg= uri;
          $scope.$apply();
        };
        fileReader.readAsDataURL(flowFile.file);
      });
    };
}
