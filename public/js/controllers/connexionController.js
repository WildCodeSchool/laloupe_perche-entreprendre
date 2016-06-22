// CONNEXION CONTROLLER
function connexionController($scope, $http, userService, $rootScope, $location) {
  $('html, body').animate({ scrollTop: 0 }, 'swing');




    $scope.connexion = function (mail, mdp) {
      userService.connect({userEmail: mail, userMdp: mdp}).then(function(res){
        $rootScope.token = res.data.token;
        $rootScope.user = res.data.user;
          $location.path('/');
      })
    }






}
