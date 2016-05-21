
function contactController($scope, $http, $rootScope, contactService) {
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



 }
