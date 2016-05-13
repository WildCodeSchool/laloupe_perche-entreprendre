// MAIN CONTROLLER
function mainController($scope, $http, todoService, $rootScope) {
    $scope.title = "Todo List";
    $scope.content = '';
    $scope.connect = $rootScope.connect;
    $('html, body').animate({
        scrollTop: 0
    }, 'swing');

    $(".hamburger").focusin(function () {
        $(".tiles").css("margin-left", "200px").css("transition", "0.6s");

    });
    $(".hamburger").focusout(function () {
        $(".tiles").css("margin-left", "0px").css("transition", "0.6s");
    });

    function load() {
        todoService.get().then(function (res) {
            $scope.todos = res.data;
        });
    }

    $scope.add = function () {
        var data = {};
        data.description = $scope.description;
        todoService.create(data).then(function (res) {
            load();
        });
        $scope.description = "";
    }
    $scope.update = function (todo) {
        todoService.update(todo._id, todo).then(function (res) {
            load();
        });
    }
    $scope.delete = function (todo) {
        todoService.delete(todo._id).then(function (res) {
            load();
        });
    }
    load();


    //========================== BOUTON =========================

    $scope.menfou = function () {
        TweenLite.to(angular.element($("#caption")), 2, {
            css: {
                top: 0
            },
            delay: 1,
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#btn1")), 2, {
            css: {
                left: 0
            },
            delay: 2,
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#btn2")), 2, {
            css: {
                left: 20
            },
            delay: 2.5,
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#btn3")), 2, {
            css: {
                left: 0
            },
            delay: 3,
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#btn4")), 2, {
            css: {
                left: 20
            },
            delay: 3.5,
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#btn5")), 2, {
            css: {
                left: 0
            },
            delay: 4,
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#btn6")), 2, {
            css: {
                left: 40
            },
            delay: 4.5,
            ease: Power2.easeOut
        });

    };
    $scope.menfou();

    $scope.btn1 = function () {
        TweenLite.to(angular.element($("#content")), 0.5, {
            css: {
                top: 0
            },
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#backbutton")), 1, {
            css: {
                left: 650,
                rotation: -180
            },
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#pagecaption")), 1, {
            css: {
                top: 0
            },
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#caption")), 1, {
            css: {
                top: 90
            },
            ease: Power2.easeOut
        });
        angular.element($("#pagecaption")).text("UN ÉCOSYSTÈME DYNAMIQUE");
        $scope.content = 'ecosysteme';
    };

    $scope.btn2 = function () {
        TweenLite.to(angular.element($("#content")), 0.5, {
            css: {
                top: 0
            },
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#backbutton")), 1, {
            css: {
                left: 650,
                rotation: -180
            },
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#pagecaption")), 1, {
            css: {
                top: 0
            },
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#caption")), 1, {
            css: {
                top: 90
            },
            ease: Power2.easeOut
        });
        angular.element($("#pagecaption")).text("UN POSITIONNEMENT STRATÉGIQUE");
        $scope.content = 'positionnement';

    };

    $scope.btn3 = function () {
        TweenLite.to(angular.element($("#content")), 0.5, {
            css: {
                top: 0
            },
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#backbutton")), 1, {
            css: {
                left: 650,
                rotation: -180
            },
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#pagecaption")), 1, {
            css: {
                top: 0
            },
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#caption")), 1, {
            css: {
                top: 90
            },
            ease: Power2.easeOut
        });
        angular.element($("#pagecaption")).text("UN ACCOMPAGNEMENT PRIVILÉGIÉ !!");
        $scope.content = 'accompagnement';

    };

    $scope.btn4 = function () {
        TweenLite.to(angular.element($("#content")), 0.5, {
            css: {
                top: 0
            },
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#backbutton")), 1, {
            css: {
                left: 650,
                rotation: -180
            },
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#pagecaption")), 1, {
            css: {
                top: 0
            },
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#caption")), 1, {
            css: {
                top: 90
            },
            ease: Power2.easeOut
        });
        angular.element($("#pagecaption")).text("UN ENVIRONNEMENT DE QUALITÉ");
        $scope.content = 'environnement';

    };

    $scope.btn5 = function () {
        TweenLite.to(angular.element($("#content")), 0.5, {
            css: {
                top: 0
            },
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#backbutton")), 1, {
            css: {
                left: 650,
                rotation: -180
            },
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#pagecaption")), 1, {
            css: {
                top: 0
            },
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#caption")), 1, {
            css: {
                top: 90
            },
            ease: Power2.easeOut
        });
        angular.element($("#pagecaption")).text("Contact Us");
        $scope.content = 'scoopit';

    };

    $scope.btn6 = function () {
        TweenLite.to(angular.element($("#content")), 0.5, {
            css: {
                top: 0
            },
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#backbutton")), 1, {
            css: {
                left: 650,
                rotation: -180
            },
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#pagecaption")), 1, {
            css: {
                top: 0
            },
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#caption")), 1, {
            css: {
                top: 90
            },
            ease: Power2.easeOut
        });
        angular.element($("#pagecaption")).text("Feedback");

    };


    $("#backbutton").click(function () {
        TweenLite.to(angular.element($("#content")), 1, {
            css: {
                top: 1000
            },
            ease: Power2.easeIn
        });
        TweenLite.to(angular.element($("#backbutton")), 1, {
            css: {
                left: 760,
                rotation: 0
            },
            ease: Power2.easeIn
        });
        TweenLite.to(angular.element($("#pagecaption")), 1, {
            css: {
                top: -60
            },
            ease: Power2.easeOut
        });
        TweenLite.to(angular.element($("#caption")), 1, {
            css: {
                top: 0
            },
            ease: Power2.easeOut
        });
    });

    //========================== BOUTON =========================

}