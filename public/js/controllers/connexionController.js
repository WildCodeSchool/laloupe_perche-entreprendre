// CONNEXION CONTROLLER
function connexionController($scope, $http, connexionService, $rootScope, $location) {
  $('html, body').animate({ scrollTop: 0 }, 'swing');
  $rootScope.connect = 0;

    function load() {
        connexionService.get().then(function (res) {
            //console.log(res.data);
            $scope.todos = res.data;
            $scope.connexions = res.data;
            console.log($scope.connexions);
        });
    }


    $scope.add = function () {
        var data = {};
        data.userVille = $scope.userVille;
        data.userFunction = $scope.userFunction;
        data.userEmail = $scope.userEmail;
        data.userNote = $scope.userNote;
        data.userMdp = $scope.userMdp;
        data.userName = $scope.userName;
        data.userFirstname = $scope.userFirstname;
        data.userEnterprise = $scope.userEnterprise;
        data.userPhone = $scope.userPhone;

        connexionService.create(data).then(function (res) {
            load();
        });
        $scope.userEmail = "";
        $scope.userMdp = "";
        $scope.userVille = "";
        $scope.userName = "";
        $scope.userFunction = "";
        $scope.userNote = "";
        $scope.userEnterprise = "";
        $scope.userFirstname = "";
        $scope.userPhone = "";
    }

    $scope.connexion = function (mail, mdp) {
        console.log(mail, mdp);
        for (var i = 0; i < $scope.connexions.length; i++) {
          if ($scope.connexions[i].userEmail == mail && $scope.connexions[i].userMdp == mdp){
            $rootScope.userId = $scope.connexions[i];
            console.log($rootScope.userId);
            $rootScope.connect = 1;
            $location.path('#/')
          }
        }
    }

    $scope.update = function (todo) {
        connexionService.update(todo._id, todo).then(function (res) {
            load();
        });
    };
    $scope.delete = function (todo) {
        connexionService.delete(todo._id).then(function (res) {
            load();
        });
    }
    load();


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
