function contactController($scope, $http, $rootScope, contactService, connexionService) {
    $scope.user = $rootScope.userId;

    contactService.get().then(function(res) {
        $scope.friendlist = res.data
    });

    $scope.band = function() {
        TweenLite.to(angular.element($("#caption")), 2, {
            css: {
                top: 0
            },
            delay: 1,
            ease: Power2.easeOut
        });
    };
    $scope.band();
}
