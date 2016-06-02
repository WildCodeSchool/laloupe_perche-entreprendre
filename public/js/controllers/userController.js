// USER CONTROLLER
function userController($scope, $http, userService, contactService, agendaService, bureauService, $rootScope, $location) {
  $('html, body').animate({ scrollTop: 0 }, 'swing');
  $scope.user = $rootScope.userId;


    function load(){
      userService.get().then(function (res) {
          $scope.userlist = res.data
      });
      contactService.get().then(function (res) {
          $scope.contactlist = res.data
      });
      agendaService.get().then(function (res) {
          $scope.agendalist = res.data
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
      $scope.addAgenda = function () {
          var data = {};
          data.agendaImg = $scope.agendaImg[0];
          data.agendaTitle = $scope.agendaTitle;
          data.agendaDescription = $scope.agendaDescription;
          data.agendaDate = $scope.agendaDate;
          data.agendaHour = $scope.agendaHour;
          data.agendaCity = $scope.agendaCity;
          data.agendaPrice = $scope.agendaPrice;

          agendaService.create(data).then(function (res) {
              load();
          });
          $scope.agendaImg = "";
          $scope.agendaTitle = "";
          $scope.agendaDescription = "";
          $scope.agendaDate = "";
          $scope.agendaHour = "";
          $scope.agendaCity = "";
          $scope.agendaPrice = "";
      }

      $scope.update = function(user){
        var id = user._id;
        $rootScope.userId = user;
        delete user._id;
		    userService.update(id, user).then(function(res){
			    load();
		    });
	     }
       $scope.updateAgenda = function(agenda){
         var id = agenda._id;
         delete agenda._id;
        agendaService.update(id,agenda).then(function(res){
          load();
        });
       }

      $scope.delete = function(user,serv){
        if (serv == 'user'){
          userService.delete(user._id).then(function(res){
            load();
          });
        }
        else if (serv == 'contact'){
          contactService.delete(user._id).then(function(res){
            load();
          });
        }
        else if (serv == 'agenda'){
          agendaService.delete(user._id).then(function(res){
            load();
          });
        }

      }
      load();

      //  ------------   Flow Image User  -----------

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


      //  ------------   Flow Image Agenda  -----------

      $scope.agendaImg = [];

      $scope.processFiles = function (files) {
        angular.forEach(files, function (flowFile, i) {
          var fileReader = new FileReader();
          fileReader.onload = function (event) {
            var uri = event.target.result;
            $scope.agendaImg[i] = uri;
            console.log($scope.agendaImg);
          };
          fileReader.readAsDataURL(flowFile.file);
        });
      };
}
