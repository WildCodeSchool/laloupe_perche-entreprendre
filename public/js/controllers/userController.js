// USER CONTROLLER
function userController($scope, $http, userService, contactService, linkService, agendaService, bureauService, temoignageService, $rootScope, $location) {

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




    function load() {
        userService.get().then(function(res) {
            $scope.userlist = res.data
        });
        contactService.get().then(function(res) {
            $scope.contactlist = res.data;
            console.log($scope.contactlist);
        });
        agendaService.get().then(function(res) {
            $scope.agendalist = res.data
        });
        bureauService.get().then(function(res) {
            $scope.bureaulist = res.data
        });
        temoignageService.get().then(function(res) {
            $scope.temoignagelist = res.data
        });
        linkService.get().then(function(res) {
            $scope.linklist = res.data
        });

    }

    // NG-CLASS MANIPULATION OF CREATION TILE
    $scope.IsClickEnable = true;
    $scope.bigOrSmall = "theCreation";
    $scope.buttonClass = "noDisplay";
    $scope.buttonClass2 = "noDisplay";
    $scope.hidePagination = "noDisplay";
    $scope.hideContent = "noDisplay";
    $scope.hideSocietyForCreation = "theSociety";
    $scope.hideYoutubeForCreation = "theYoutube";
    $scope.hidecolumnThreeForCreation = "columnThree";
    $scope.changeHeight = "columnTwo";
    $scope.marginRegulation = "free";

    $scope.changeClass = function() {

      $scope.isCreationBigger = 1;
      if ($scope.sizeAgenda === "bigAgenda")
          $scope.sizeAgenda = "theAgenda";
        if ($scope.bigOrSmall === "theCreation")
            $scope.bigOrSmall = "bigCreation";
        if ($scope.buttonClass === "noDisplay")
            $scope.buttonClass = "bigCreationClose";
        if ($scope.hidePagination === "noDisplay")
            $scope.hidePagination = "pagination-button";
        if ($scope.hideContent === "noDisplay")
            $scope.hideContent = "display";
        if ($scope.hideSocietyForCreation === "theSociety")
            $scope.hideSocietyForCreation = "noDisplay";
        if ($scope.hideYoutubeForCreation === "theYoutube")
            $scope.hideYoutubeForCreation = "noDisplay";
        if ($scope.hidecolumnThreeForCreation === "columnThree")
            $scope.hidecolumnThreeForCreation = "noDisplay";
        if ($scope.hidecolumnThreeForCreation === "columnTwo")
            $scope.hidecolumnThreeForCreation = "columnTwoTer";
        if ($scope.marginRegulation === "free")
            $scope.marginRegulation = "accueilOneTile";
        if ($scope.hidePhoto === "thePhoto")
            $scope.hidePhoto = "noDisplay";
        $scope.buttonClass2 = 'noDisplay';
    };

    $scope.returnCreationClass = function() {
        //Tile create activity
        $scope.bigOrSmall = 'theCreation';
        //Close Button
        $scope.buttonClass = 'noDisplay';
        //Pagination Button
        $scope.hideContent = 'noDisplay';
        //Society tile
        $scope.hideSocietyForCreation = 'theSociety';
        //Youtube tile
        $scope.hideYoutubeForCreation = 'theYoutube';
        //Column 3
        $scope.hidecolumnThreeForCreation = 'columnThree';
        $scope.hidePhoto = 'thePhoto';
        $scope.hideScoupit = 'theScoupit';
        $scope.hideLinks = 'theLinks';
        //Margin Regulation
        $scope.marginRegulation = 'free';

    }

    //NG-CLASS AGENDA MANIPULATION
    $scope.sizeAgenda = "theAgenda";
    $scope.switchAgenda = "subAgenda";
    $scope.switchAgendaContent = "noDisplay";
    $scope.hideScoupit = "theScoupit";
    $scope.hidePhoto = "thePhoto";
    $scope.hideLinks = "theLinks";

    $scope.changeAgendaSize = function() {

      $scope.IsClickEnable = false;
        if ($scope.sizeAgenda === "theAgenda")
            $scope.sizeAgenda = "bigAgenda";
        if ($scope.switchAgenda === "subAgenda")
            $scope.switchAgenda = "noDisplay";
        if ($scope.switchAgendaContent === "noDisplay")
            $scope.switchAgendaContent = "textEvent";
        if ($scope.hideSocietyForCreation === "theSociety")
            $scope.hideSocietyForCreation = "noDisplay";
        if ($scope.hideYoutubeForCreation === "theYoutube")
            $scope.hideYoutubeForCreation = "noDisplay";
        if ($scope.hideScoupit === "theScoupit")
            $scope.hideScoupit = "noDisplay";
        if ($scope.hideLinks === "theLinks")
            $scope.hideLinks = "noDisplay";
        if ($scope.changeHeight === "columnTwo")
            $scope.changeHeight = "columnTwoBis";
        if ($scope.hidecolumnThreeForCreation === "columnThree")
            $scope.hidecolumnThreeForCreation = "columnThreeBis";
        if ($scope.buttonClass2 === "noDisplay")
            $scope.buttonClass2 = "bigCreationClose2";

    }

    $scope.returnCreationClass2 = function() {
      $scope.IsClickEnable = true;

        //Tile agenda
        $scope.sizeAgenda = 'theAgenda';
        $scope.switchAgenda = 'subAgenda';
        $scope.switchAgendaContent = 'noDisplay';
        $scope.hideSocietyForCreation = 'theSociety';
        $scope.hideYoutubeForCreation = 'theYoutube';
        $scope.hideScoupit = 'theScoupit';
        $scope.hideLinks = 'theLinks';
        $scope.changeHeight = 'columnTwo';
        $scope.hidecolumnThreeForCreation = 'columnThree';
        $scope.buttonClass2 = 'noDisplay';


    }

    //NG-CLASS SOCIETY MANIPULATION
    $scope.hidePagination2 = "noDisplay";
    $scope.buttonClass3 = "noDisplay";
    $scope.showContent = "noDisplay";


    $scope.changeSocietySize = function() {
        if ($scope.hideSocietyForCreation === "theSociety")
            $scope.hideSocietyForCreation = "bigSociety";
        if ($scope.buttonClass3 === "noDisplay")
            $scope.buttonClass3 = "bigCreationClose3";
        if ($scope.hidePagination2 === "noDisplay")
            $scope.hidePagination2 = "pagination-button";
        if ($scope.bigOrSmall === "theCreation")
            $scope.bigOrSmall = "noDisplay";
        if ($scope.hideYoutubeForCreation === "theYoutube")
            $scope.hideYoutubeForCreation = "noDisplay";
        if ($scope.hidecolumnThreeForCreation === "columnThree")
            $scope.hidecolumnThreeForCreation = "noDisplay";
        if ($scope.marginRegulation === "free")
            $scope.marginRegulation = "accueilOneTile";
          }


//NG-CLASS LINKS MANIPULATION
  $scope.changeLinksSize = function() {
    $scope.hideLinks = 'bigLinks';
    $scope.changeHeight = 'noDisplay';
    $scope.hideScoupit = 'noDisplay';
    $scope.hidePhoto = 'noDisplay';
    $scope.marginRegulation = "accueilOneTile";
    $scope.buttonClass4 = "bigCreationClose4";
  }
  $scope.returnCreationClass4 = function() {
    $scope.hideLinks = 'theLinks';
    $scope.changeHeight = 'columnTwo';
    $scope.hideScoupit = 'theScoupit';
    $scope.hidePhoto = 'thePhoto';
    $scope.marginRegulation = "free";
    $scope.buttonClass4 = 'noDisplay';
  }
      /*  //content's tile
        if ($scope.showContent === "noDisplay")
            $scope.showContent = "societyContent";
    }*/


    $scope.returnCreationClass3 = function() {
        //Tile create activity
        $scope.bigOrSmall = "theCreation";
        //Close Button
        $scope.buttonClass3 = 'noDisplay';
        //Pagination Button
        $scope.hidePagination2 = 'noDisplay';
        //Society tile
        $scope.hideSocietyForCreation = 'theSociety';
        $scope.showContent = 'noDisplay';
        //Youtube tile
        $scope.hideYoutubeForCreation = 'theYoutube';
        //Column 3
        $scope.hidecolumnThreeForCreation = 'columnThree';
        //Margin Regulation
        $scope.marginRegulation = 'free';
    }




    $scope.add = function() {
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

        userService.create(data).then(function(res) {
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
    $scope.addContact = function() {
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
        contactService.create(data).then(function(res) {

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
    $scope.addAgenda = function() {
        var data = {};
        data.agendaImg = $scope.agendaImg;
        data.agendaTitle = $scope.agendaTitle;
        data.agendaDescription = $scope.agendaDescription;
        data.agendaDate = $scope.agendaDate;
        data.agendaHour = $scope.agendaHour;
        data.agendaCity = $scope.agendaCity;
        data.agendaPrice = $scope.agendaPrice;
        data.agendaLink = $scope.agendaLink;


        agendaService.create(data).then(function(res) {
            load();
        });
        $scope.agendaImg = "";
        $scope.agendaTitle = "";
        $scope.agendaDescription = "";
        $scope.agendaDate = "";
        $scope.agendaHour = "";
        $scope.agendaCity = "";
        $scope.agendaPrice = "";
        $scope.agendaLink = "";
    }
    $scope.addBureau = function() {
        var data = {};
        data.bureauImg = $scope.bureauImg;
        data.bureauType = $scope.bureauType;
        data.bureauDescription = $scope.bureauDescription;
        data.bureauSecteur = $scope.bureauSecteur;
        data.bureauSurface = $scope.bureauSurface;
        data.bureauPrice = $scope.bureauPrice;

        bureauService.create(data).then(function(res) {
            load();
        });
        $scope.bureauImg = "";
        $scope.bureauType = "";
        $scope.bureauDescription = "";
        $scope.bureauSecteur = "";
        $scope.bureauSurface = "";
        $scope.bureauPrice = "";
    }
    $scope.addTemoignage = function() {
        var data = {};
        data.temoignageImg = $scope.temoignageImg;
        data.temoignageAge = $scope.temoignageAge;
        data.temoignageDescription = $scope.temoignageDescription;
        data.temoignageName = $scope.temoignageName;
        data.temoignageFirstname = $scope.temoignageFirstname;
        data.temoignageSecteur = $scope.temoignageSecteur;
        data.temoignageFunction = $scope.temoignageFunction;

        temoignageService.create(data).then(function(res) {
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
    $scope.addLink = function() {
        var data = {};
        data.linkName = $scope.linkName;
        data.linkValue = $scope.linkValue;

        linkService.create(data).then(function(res) {
            load();
        });
        $scope.linkName = "";
        $scope.linkValue = "";
    }

    $scope.update = function(user) {
        var id = user._id;
        $rootScope.userId = user;
        delete user._id;
        userService.update(id, user).then(function(res) {
            load();
        });
    }
    $scope.updateAgenda = function(agenda) {
        var id = agenda._id;
        delete agenda._id;
        agendaService.update(id, agenda).then(function(res) {
            load();
        });
    }
    $scope.updateBureau = function(bureau) {
        var id = bureau._id;
        delete bureau._id;
        bureauService.update(id, bureau).then(function(res) {
            load();
        });
    }
    $scope.updateTemoignage = function(temoignage) {
        var id = temoignage._id;
        delete temoignage._id;
        temoignageService.update(id, temoignage).then(function(res) {
            load();
        });
    }
    $scope.updateLink = function(link) {
        var id = link._id;
        delete link._id;
        linkService.update(id, link).then(function(res) {
            load();
        });
    }

    $scope.delete = function(user, serv) {
        if (serv == 'user') {
            userService.delete(user._id).then(function(res) {
                load();
            });
        } else if (serv == 'contact') {
            contactService.delete(user._id).then(function(res) {
                load();
            });
        } else if (serv == 'agenda') {
            agendaService.delete(user._id).then(function(res) {
                load();
            });
        } else if (serv == 'bureau') {
            bureauService.delete(user._id).then(function(res) {
                load();
            });
        } else if (serv == 'temoignage') {
            temoignageService.delete(user._id).then(function(res) {
                load();
            });
        } else if (serv == 'link') {
            linkService.delete(user._id).then(function(res) {
                load();
            });
        }
    }
    load();

    //  ------------   Flow Image User  -----------

    $scope.userImg = '';
    $scope.photo = true;
    $scope.processFileUser = function(files) {
        $scope.photo = false;
        angular.forEach(files, function(flowFile, i) {
            var fileReader = new FileReader();
            fileReader.onload = function(event) {
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

    $scope.processFilesAgenda = function(files) {
        angular.forEach(files, function(flowFile, i) {
            var fileReader = new FileReader();
            fileReader.onload = function(event) {
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

    $scope.processFilesOffice = function(files) {
        angular.forEach(files, function(flowFile, i) {
            var fileReader = new FileReader();
            fileReader.onload = function(event) {
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

    $scope.processFilesTestimonial = function(files) {
        angular.forEach(files, function(flowFile, i) {
            var fileReader = new FileReader();
            fileReader.onload = function(event) {
                var uri = event.target.result;
                $scope.temoignageImg = uri;
                $scope.$apply();
                console.log($scope.temoignageImg);
            };
            fileReader.readAsDataURL(flowFile.file);
        });
    };

    $(document).ready(function() {
        $('#buttonExport').click(function() {
            load();
            var data = $scope.contactlist.map(function(contact) {
                delete contact.contactMdp;
                delete contact.contactImg;
                return contact;
            });
            if (data == '')
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
        fileName += ReportTitle.replace(/ /g, "_");

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
