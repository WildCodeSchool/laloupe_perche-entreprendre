// PROFIL CONTROLLER

function profilController($scope, $http, $rootScope, userService) {

  $scope.user = $rootScope.userId;

  $scope.update = function () {
    userService.update($scope.user._id ,$scope.user).then(function (res) {
        load();
    });
  }

    $scope.menfou = function () {
        TweenLite.to(angular.element($("#caption")), 2, {
            css: {
                top: 0
            },
            delay: 1,
            ease: Power2.easeOut
        });

    };
    $scope.menfou();

}
