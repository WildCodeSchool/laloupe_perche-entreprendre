// MAIN CONTROLLER
function mainController($scope, $http, $rootScope) {

    // $scope.connect = $rootScope.connect;
    $('html, body').animate({
        scrollTop: 0
    }, 'swing');

    $(".hamburger").focusin(function() {
        $(".tiles").css("margin-left", "150px").css("transition", "0.6s");
        $('.accueilOne').animate({
          flexWrap: 'nowrap'
        });

    });
    $(".hamburger").focusout(function() {
        $(".tiles").css("margin-left", "0px").css("transition", "0.6s");
        $('.accueilOne').animate({
          flexWrap: 'wrap'
        });
    });


}
