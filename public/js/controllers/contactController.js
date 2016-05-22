
function contactController($scope, $http, $rootScope, contactService, connexionService) {
  $scope.user = $rootScope.userId;
  // $scope.friendlist = [
	// 	{'name': 'Sébastien'},
	// 	{'name': 'Marion'},
	// 	{'name': 'Youssef'},
	// 	{'name': 'Romain'},
	// 	{'name': 'Laura'},
	// 	{'name': 'Julien'},
	// 	{'name': 'Marie'}
	// ];
  contactService.get().then(function (res) {
      $scope.friendlist = res.data

  });

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

  //----------- Modal ---------------
  $scope.infoProfil = function (id){
      contactService.get().then(function (res) {
          $scope.friendlist = res.data;
          $scope.index = -1;
          $scope.friendlist.forEach(function (friend, index){
              if (friend._id == id){
                  $scope.index = index;
                  return;
              }
          });
      });
  }

 }
