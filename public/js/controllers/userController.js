// USER CONTROLLER
function userController($scope, $http, userService, contactService, agendaService, bureauService, temoignageService, $rootScope, $location) {
  $('html, body').animate({ scrollTop: 0 }, 'swing');
  $scope.user = $rootScope.userId;

  $scope.title = "Todo List";
  $scope.content = '';
  $scope.connect = $rootScope.connect;
  $('html, body').animate({
      scrollTop: 0
  }, 'swing');

  $(".hamburger").focusin(function() {
      $(".tiles").css("margin-left", "150px").css("transition", "0.6s");

  });
  $(".hamburger").focusout(function() {
      $(".tiles").css("margin-left", "0px").css("transition", "0.6s");
  });


  // ng-click function to change Agenda views
  $scope.changeAgendaView = function() {
    $('.subAgenda').fadeOut(300);
    $('.textEvent').fadeIn(700);
  }

// Pagination




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
      bureauService.get().then(function (res) {
          $scope.bureaulist = res.data
      });
      temoignageService.get().then(function (res) {
          $scope.temoignagelist = res.data
      });
    }

      $scope.add = function () {
          var data = {};
          data.userVille = $scope.userVille;
          data.userFunction = $scope.userFunction;
          data.userImg = $scope.userImg;
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
      $scope.addContact = function () {
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
        contactService.create(data).then(function (res) {

        });
        $scope.contactEmail = "";
        $scope.contactMdp = "";
        $scope.contactVille = "";
        $scope.contactName = "";
        $scope.contactFunction = "";
        $scope.contactImg = [];
        $scope.contactNote = "";
        $scope.contactEnterprise = "";
        $scope.contactFirstname = "";
        $scope.contactPhone = "";
      }
      $scope.addAgenda = function () {
          var data = {};
          data.agendaImg = $scope.agendaImg;
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
      $scope.addBureau = function () {
          var data = {};
          data.bureauImg = $scope.bureauImg;
          data.bureauType = $scope.bureauType;
          data.bureauDescription = $scope.bureauDescription;
          data.bureauSecteur = $scope.bureauSecteur;
          data.bureauSurface = $scope.bureauSurface;
          data.bureauPrice = $scope.bureauPrice;

          bureauService.create(data).then(function (res) {
              load();
          });
          $scope.bureauImg = "";
          $scope.bureauType = "";
          $scope.bureauDescription = "";
          $scope.bureauSecteur = "";
          $scope.bureauSurface = "";
          $scope.bureauPrice = "";
      }
      $scope.addTemoignage = function () {
          var data = {};
          data.temoignageImg = $scope.temoignageImg;
          data.temoignageAge = $scope.temoignageAge;
          data.temoignageDescription = $scope.temoignageDescription;
          data.temoignageName = $scope.temoignageName;
          data.temoignageFirstname = $scope.temoignageFirstname;
          data.temoignageSecteur = $scope.temoignageSecteur;
          data.temoignageFunction = $scope.temoignageFunction;

          temoignageService.create(data).then(function (res) {
              load();
          });
          $scope.temoignageImg = "";
          $scope.temoignageAge = "";
          $scope.temoignageDescription = "";
          $scope.temoignageName = "";
          $scope.temoignageFirstname = "";
          $scope.temoignageSecteur = "";
          $scope.temoignageFunction = "";
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
       $scope.updateBureau = function(bureau){
         var id = bureau._id;
         delete bureau._id;
        bureauService.update(id,bureau).then(function(res){
          load();
        });
       }
       $scope.updateTemoignage = function(temoignage){
         var id = temoignage._id;
         delete temoignage._id;
        temoignageService.update(id,temoignage).then(function(res){
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
        else if (serv == 'bureau'){
          bureauService.delete(user._id).then(function(res){
            load();
          });
        }
        else if (serv == 'temoignage'){
          temoignageService.delete(user._id).then(function(res){
            load();
          });
        }
      }
      load();

      //  ------------   Flow Image User  -----------

    $scope.userImg = '';
    $scope.photo = true;
    $scope.processFileUser = function (files) {
      $scope.photo = false;
      angular.forEach(files, function (flowFile, i) {
        var fileReader = new FileReader();
        fileReader.onload = function (event) {
          var uri = event.target.result;
          $scope.userImg = uri;
          $scope.$apply();
        };
        fileReader.readAsDataURL(flowFile.file);
      });
    };
    // $scope.cancel = function() {
    //   $scope.userImg.cancel();
    //
    // };

      //  ------------   Flow Image Agenda  -----------

      $scope.agendaImg = '';

      $scope.processFilesAgenda = function (files) {
        angular.forEach(files, function (flowFile, i) {
          var fileReader = new FileReader();
          fileReader.onload = function (event) {
            var uri = event.target.result;
            $scope.agendaImg = uri;
            $scope.$apply();
            console.log($scope.agendaImg);
          };
          fileReader.readAsDataURL(flowFile.file);
        });
      };

      //  ------------   Flow Image Bureaux  -----------

      $scope.bureauImg = '';

      $scope.processFilesOffice = function (files) {
        angular.forEach(files, function (flowFile, i) {
          var fileReader = new FileReader();
          fileReader.onload = function (event) {
            var uri = event.target.result;
            $scope.bureauImg = uri;
            $scope.$apply();
            console.log($scope.bureauImg);
          };
          fileReader.readAsDataURL(flowFile.file);
        });
      };
      //  ------------   Flow Image Temoignage  -----------

      $scope.temoignageImg = '';

      $scope.processFilesTestimonial = function (files) {
        angular.forEach(files, function (flowFile, i) {
          var fileReader = new FileReader();
          fileReader.onload = function (event) {
            var uri = event.target.result;
            $scope.temoignageImg = uri;
            $scope.$apply();
            console.log($scope.temoignageImg);
          };
          fileReader.readAsDataURL(flowFile.file);
        });
      };

      $(document).ready(function(){
      $('#buttonExport').click(function(){
          load();
          var data = $scope.contactlist.map(function(contact){
            delete contact.contactMdp;
            delete contact.contactImg;
            return contact;
          });
          if(data == '')
              return;

          JSONToCSVConvertor(data, "Contacts", true);
      });
  });

  function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
      //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
      var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

      var CSV = '';
      //Set Report title in first row or line

      CSV += ReportTitle + '\r\n\n';

      //This condition will generate the Label/Header
      if (ShowLabel) {
          var row = "";

          //This loop will extract the label from 1st index of on array
          for (var index in arrData[0]) {

              //Now convert each value to string and comma-seprated
              row += index + ',';
          }

          row = row.slice(0, -1);

          //append Label row with line break
          CSV += row + '\r\n';
      }

      //1st loop is to extract each row
      for (var i = 0; i < arrData.length; i++) {
          var row = "";

          //2nd loop will extract each column and convert it in string comma-seprated
          for (var index in arrData[i]) {
              row += '"' + arrData[i][index] + '",';
          }

          row.slice(0, row.length - 1);

          //add a line break after each row
          CSV += row + '\r\n';
      }

      if (CSV == '') {
          alert("Invalid data");
          return;
      }

      //Generate a file name
      var fileName = "MyReport_";
      //this will remove the blank-spaces from the title and replace it with an underscore
      fileName += ReportTitle.replace(/ /g,"_");

      //Initialize file format you want csv or xls
      var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

      // Now the little tricky part.
      // you can use either>> window.open(uri);
      // but this will not work in some browsers
      // or you will not get the correct file extension

      //this trick will generate a temp <a /> tag
      var link = document.createElement("a");
      link.href = uri;

      //set the visibility hidden so it will not effect on your web-layout
      link.style = "visibility:hidden";
      link.download = fileName + ".csv";

      //this part will append the anchor tag and remove it after automatic click
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }


}
