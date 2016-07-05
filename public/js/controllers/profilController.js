// PROFIL CONTROLLER

function profilController($scope, $http, $rootScope, userService) {


  $scope.update = function(user) {
      var id = user._id;
      $rootScope.userId = user;
      delete user._id;
      userService.update(id, user).then(function(res) {
          load();
      });
  }

    //  ------------   Flow   -----------



    $scope.processFileUser = function (files) {
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
