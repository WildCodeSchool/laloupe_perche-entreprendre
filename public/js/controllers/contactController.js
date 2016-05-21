
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
 }
