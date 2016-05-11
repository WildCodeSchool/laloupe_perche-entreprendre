// CONNEXION CONTROLLER
function connexionController($scope, $http, connexionService) {


    function load() {
        connexionService.get().then(function (res) {
            $scope.connexions = res.data;
        });
    }

    $scope.registration = {
        userName: "",
        userEmail: "",
        password: "",
        firstName: "",
        lastName: "",
        userEnterprise: "",
        userFunction: "",
        userPhone: "",
    };

    $scope.signUp = function () {
        var data = {};
        data.registration.userName = $scope.userName;
        data.registration.userEmail = $scope.userEmail;
        data.registration.password = $scope.password;
        data.registration.confirmPassword = $scope.confirmPassword;
        data.registration.firstName = $scope.firstName;
        data.registration.lastName = $scope.lastName;
        data.registration.userEnterprise = $scope.userEnterprise;
        data.registration.userFunction = $scope.userFunction;
        data.registration.userPhone = $scope.userPhone;
        connexionService.create(data).then(function (res) {
            load();
        });
        $scope.description = "";
    }

    /*$scope.add = function () {
        var data = {};
        data.description = $scope.description;
        connexionService.create(data).then(function (res) {
            load();
        });
        $scope.description = "";
    }*/

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