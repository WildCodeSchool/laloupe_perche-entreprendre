// PROFIL CONTROLLER

function profilController($scope, $http, $rootScope, userService) {

  var id = $rootScope.userId._id;
  $scope.user = $rootScope.userId;
  delete $scope.user._id;

  $scope.update = function () {
    userService.update(id ,$scope.user).then(function (res) {
    });
  }

    $scope.band = function () {
        TweenLite.to(angular.element($("#caption")), 2, {
            css: {
                top: 0
            },
            delay: 1,
            ease: Power2.easeOut
        });

    };
    $scope.band();

    //  ------------   Flow   -----------

    $scope.userImg = [];

    $scope.processFiles = function (files) {
      angular.forEach(files, function (flowFile, i) {
        var fileReader = new FileReader();
        fileReader.onload = function (event) {
          var uri = event.target.result;
          $scope.userImg[i] = uri;
          console.log($scope.userImg);
        };
        fileReader.readAsDataURL(flowFile.file);
      });
    };
}
