// CONNEXION CONTROLLER
function connexionController($scope, $http, connexionService) {

    $('html, body').animate({
        scrollTop: 0
    }, 'swing');


    function load() {
        connexionService.get().then(function (res) {
            //console.log(res.data);
            $scope.todos = res.data;
            $scope.connexions = res.data;
        });
    }

    $scope.user = {
        userName: "",
        userEmail: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        userEnterprise: "",
        userFunction: "",
        userPhone: "",
        userPhoto: "",
        userNote: "",
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
        data.userNote = $scope.userNote;

        connexionService.create(data).then(function (res) {
            load();
        });
        $scope.description = "";
    };

    $scope.add = function () {
        var data = {};
        data.description = $scope.description;
        data.lastName = $scope.lastName;
        data.userFunction = $scope.userFunction;
        data.userEmail = $scope.userEmail;
        data.userNote = $scope.userNote;
        connexionService.create(data).then(function (res) {
            load();
        });
        $scope.description = "";
        $scope.lastName = "";
        $scope.userFunction = "";
        $scope.userEmail = "";
        $scope.userNote = "";
    };



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
}