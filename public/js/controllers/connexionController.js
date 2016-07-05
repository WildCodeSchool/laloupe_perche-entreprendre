// CONNEXION CONTROLLER
function connexionController($scope, $http, userService, $rootScope, $location) {
  $('html, body').animate({ scrollTop: 0 }, 'swing');

    $scope.connexion = function (mail, mdp) {
      if (mail == undefined || mdp == undefined) {
        return ;
      }
      userService.connect({userEmail: mail, userMdp: mdp}).then(function(res){
        $rootScope.token = res.data.token;
        $rootScope.user = res.data.user;
          $location.path('/');
      }).catch(function(){
  			$rootScope.loginMessage.title = "Attention !";
  			$rootScope.loginMessage.message = "Identifiant ou mot de passe incorrect";
        $location.path('/connexion');
  		});
    }


    $scope.lostpassword = function (){
        userService.lostpassword($scope.emailToBack).then(function(res){
            alert("un mail vous a été envoyé !");
        })
    }

}
