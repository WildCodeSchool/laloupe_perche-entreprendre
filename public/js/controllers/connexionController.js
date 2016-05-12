// CONNEXION CONTROLLER
function connexionController($scope, $http, connexionService, $rootScope, $location) {
  $('html, body').animate({ scrollTop: 0 }, 'swing');
  $rootScope.connect = 0;

    function load() {
        connexionService.get().then(function (res) {
            $scope.connexions = res.data;
        });
    }

    $scope.registration = {
        userEmail: "",
        userName: "",
        userFirstname: "",
        userPassword: "",
        userConfirm: "",
        userEnterprise: "",
        userFunction: "",
        userPhone: "",
    };

    $scope.signUp = function () {
        var data = {};
        data.userName = $scope.userName;
        data.userEmail = $scope.userEmail;
        data.password = $scope.password;
        data.confirmPassword = $scope.confirmPassword;
        data.firstName = $scope.firstName;
        data.userEnterprise = $scope.userEnterprise;
        data.userFunction = $scope.userFunction;
        data.userPhone = $scope.userPhone;
        connexionService.create(data).then(function (res) {
            load();
        });
        $scope.description = "";
    }

    $scope.add = function () {
        var data = {};
        data.userEmail = $scope.userEmail;
        data.userMdp = $scope.userMdp;

        connexionService.create(data).then(function (res) {
            load();
        });
        $scope.userEmail = "";
        $scope.userMdp = "";
    }
    $scope.connexion = function (mail, mdp) {
        console.log(mail, mdp);
        for (var i = 0; i < $scope.connexions.length; i++) {
          if ($scope.connexions[i].userEmail == mail && $scope.connexions[i].userMdp == mdp){
            $rootScope.connect = 1;
            $location.path('#/')
          }
        }
    }
    $scope.update = function (todo) {
        connexionService.update(todo._id, todo).then(function (res) {
            load();
        });
    }
    $scope.delete = function (todo) {
        connexionService.delete(todo._id).then(function (res) {
            load();
        });
    }
    load();

}
