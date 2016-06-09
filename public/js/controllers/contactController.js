function contactController($scope, $http, $rootScope, contactService, $routeParams) {
  $scope.user = $rootScope.userId;
load();
function load (){
  contactService.get().then(function (res) {
      $scope.friendlist = res.data
      console.log($scope.friendlist.contactImg);

  });
}



      $scope.add = function () {
          var data = {};
          data.contactVille = $scope.contactVille;
          data.contactImg = $scope.contactImg;
          data.contactFunction = $scope.contactFunction;
          data.contactEmail = $scope.contactEmail;
          data.contactNote = $scope.contactNote;
          data.contactMdp = $scope.contactMdp;
          data.contactName = $scope.contactName;
          data.contactFirstname = $scope.contactFirstname;
          data.contactEnterprise = $scope.contactEnterprise;
          data.contactPhone = $scope.contactPhone;
          contactService.create(data).then(function (res) {

          });
          $scope.contactEmail = "";
          $scope.contactMdp = "";
          $scope.contactVille = "";
          $scope.contactName = "";
          $scope.contactFunction = "";
          $scope.contactImg = "";
          $scope.contactNote = "";
          $scope.contactEnterprise = "";
          $scope.contactFirstname = "";
          $scope.contactPhone = "";
      }



    //  ------------   Flow   -----------

    $scope.contactImg = '';
    $scope.photo = true;
    $scope.processFileUser = function (files) {
      $scope.photo = false;
      angular.forEach(files, function (flowFile, i) {
        var fileReader = new FileReader();
        fileReader.onload = function (event) {
          var uri = event.target.result;
          $scope.contactImg = uri;
          $scope.$apply();
        };
        fileReader.readAsDataURL(flowFile.file);
      });
    };
}
