// CONNEXION CONTROLLER
function connexionController($scope, $http, userService, $rootScope, $location) {
  $('html, body').animate({ scrollTop: 0 }, 'swing');
  $rootScope.connect = 0;

    function load() {
        userService.get().then(function (res) {
            $scope.connexions = res.data;
        });
    }


    $scope.connexion = function (mail, mdp) {
        for (var i = 0; i < $scope.connexions.length; i++) {
          if ($scope.connexions[i].userEmail == mail && $scope.connexions[i].userMdp == mdp){
            $rootScope.userId = $scope.connexions[i];
            $rootScope.connect = 1;
            $location.path('#/')
          }
        }
    }


    load();



}
