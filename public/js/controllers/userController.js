// USER CONTROLLER
function userController($scope, $http, userService,contactService, $rootScope, $location) {
  $('html, body').animate({ scrollTop: 0 }, 'swing');
  $scope.user = $rootScope.userId;


    function load(){
      userService.get().then(function (res) {
          $scope.userlist = res.data
      });
      contactService.get().then(function (res) {
          $scope.contactlist = res.data
      });
    }

      $scope.add = function () {
          var data = {};
          data.userVille = $scope.userVille;
          data.userFunction = $scope.userFunction;
          data.userImg = $scope.userImg[0];
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
          $scope.userImg = "";
          $scope.userVille = "";
          $scope.userName = "";
          $scope.userFunction = "";
          $scope.userNote = "";
          $scope.userEnterprise = "";
          $scope.userFirstname = "";
          $scope.userPhone = "";
      }
      $scope.update = function(user){
        var id = user._id;
        $rootScope.userId = user;
        delete user._id;
		    userService.update(id, user).then(function(res){
			    load();
		    });
	     }
      $scope.delete = function(user){
        userService.delete(user._id).then(function(res){
          load();

        });
        contactService.delete(contact.contact._id).then(function(res){
          load();

        });
      }
      load();

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
