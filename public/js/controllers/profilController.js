// PROFIL CONTROLLER

function profilController($scope, $http, $rootScope, userService) {

  var id = $rootScope.userId._id;
  $scope.user = $rootScope.userId;
  delete $scope.user._id;

  $scope.update = function () {
    userService.update(id ,$scope.user).then(function (res) {
    });
  }

    //  ------------   Flow   -----------



    $scope.processFiles = function (files) {
      $scope.img = [];
      angular.forEach(files, function (flowFile, i) {
        var fileReader = new FileReader();
        fileReader.onload = function (event) {
          var uri = event.target.result;
          $scope.img[i] = uri;
          $scope.user.userImg = $scope.img[0];
        };
        fileReader.readAsDataURL(flowFile.file);
      });
    };
}
