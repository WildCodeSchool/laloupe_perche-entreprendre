// MAIN CONTROLLER
function mainController($scope, $http, $rootScope) {
    $scope.title = "Todo List";
    $scope.content = '';
    $scope.connect = $rootScope.connect;
    $('html, body').animate({
        scrollTop: 0
    }, 'swing');

    $(".hamburger").focusin(function() {
        $(".tiles").css("margin-left", "150px").css("transition", "0.6s");

    });
    $(".hamburger").focusout(function() {
        $(".tiles").css("margin-left", "0px").css("transition", "0.6s");
    });

}
