function contactController($scope, $http, $rootScope, contactService) {
  $scope.user = $rootScope.userId;

  contactService.get().then(function (res) {
      $scope.friendlist = res.data

  });


      $scope.add = function () {
          var data = {};
          data.contactVille = $scope.contactVille;
          data.contactFunction = $scope.contactFunction;
          data.contactEmail = $scope.contactEmail;
          data.contactNote = $scope.contactNote;
          data.contactMdp = $scope.contactMdp;
          data.contactName = $scope.contactName;
          data.contactFirstname = $scope.contactFirstname;
          data.contactEnterprise = $scope.contactEnterprise;
          data.contactPhone = $scope.contactPhone;
console.log(data);
          contactService.create(data).then(function (res) {
          });
          $scope.contactEmail = "";
          $scope.contactMdp = "";
          $scope.contactVille = "";
          $scope.contactName = "";
          $scope.contactFunction = "";
          $scope.contactNote = "";
          $scope.contactEnterprise = "";
          $scope.contactFirstname = "";
          $scope.contactPhone = "";
      }


    $scope.band = function() {
        TweenLite.to(angular.element($("#caption")), 2, {
            css: {
                top: 0
            },
            delay: 1,
            ease: Power2.easeOut
        });
    };
    $scope.band();
}
