// CONNEXION CONTROLLER
function mainController($scope, $http, connexionService) {


    function load() {
        connexionService.get().then(function (res) {
            $scope.connexions = res.data;
        });
    }

    $scope.registration = {
        userName: "",
        userEmail: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
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
        data.lastName = $scope.lastName;
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
        data.description = $scope.description;
        connexionService.create(data).then(function (res) {
            load();
        });
        $scope.description = "";
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