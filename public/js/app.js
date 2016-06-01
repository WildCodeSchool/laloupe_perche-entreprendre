function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/accueil.html',
            controller: 'mainController'
        })
        .when('/mentions', {
            templateUrl: 'views/mentions.html',
            controller: 'mentionsController'
        })
        .when('/connexion', {
            templateUrl: 'views/connexion.html',
            controller: 'connexionController'
        })
        .when('/formulaire/:userId', {
            templateUrl: 'views/formulaire.html',
            controller: 'contactController'
        })
        .when('/forgetPassword', {
            templateUrl: 'views/forgetPassword.html',
            controller: 'connexionController'
        })
        .when('/ma-carte', {
            templateUrl: 'views/ma-carte.html',
            controller: 'carteController'
        })
        .when('/mes-contacts', {
            templateUrl: 'views/mes-contacts.html',
            controller: 'contactController'
        })

    .when('/mon-profil', {
            templateUrl: 'views/mon-profil.html',
            controller: 'profilController'
        })
     .when('/annonces', {
            templateUrl: 'views/annonces.html',
            controller: 'mainController'
        })
        .when('/administration', {
            templateUrl: 'views/administration.html',
            controller: 'userController'
        })
        .otherwise({
            redirectTo: '/'
        });

}

function run($rootScope, $location) {
    var path = function() {
        return $location.path();
    };
    $rootScope.$watch(path, function(newVal, oldVal) {
        $rootScope.activetab = newVal;
    });
}

function filterBySearchFriend() {
    return function(filterBySearchFriend, searchFriend, user) {
        var newArray = [];
        !!filterBySearchFriend && filterBySearchFriend.forEach(function(e) {
          var hasPush = false;
            if (e._id != user._id) {
                if (!searchFriend) {
                    newArray.push(e);
                    hasPush = true;
                } else {
                    if (!!e.userEnterprise) {
                        if (e.userEnterprise.toLowerCase().indexOf(searchFriend.toLowerCase()) != -1) {
                            if(!hasPush) newArray.push(e);
                            hasPush = true;
                        }
                    }
                    if (!!e.userFunction) {
                        if (e.userFunction.toLowerCase().indexOf(searchFriend.toLowerCase()) != -1) {
                            if(!hasPush) newArray.push(e);
                            hasPush = true;
                        }
                    }
                    if (!!e.userVille) {
                        if (e.userVille.toLowerCase().indexOf(searchFriend.toLowerCase()) != -1) {
                            if(!hasPush) newArray.push(e);
                            hasPush = true;
                        }
                    }
                    if (!!e.userName) {
                        if (e.userName.toLowerCase().indexOf(searchFriend.toLowerCase()) != -1) {
                            if(!hasPush) newArray.push(e);
                            hasPush = true;
                        }
                    }
                }
            }
        });


        return newArray;


    }
}

angular.module('app', ['ngRoute','monospaced.qrcode','flow'])
    .config(config)
    .controller('mainController', mainController)
    .controller('contactController', contactController)
    .controller('connexionController', connexionController)
    .controller('carteController', carteController)
    .controller('mentionsController', mentionsController)
    .controller('userController', userController)
    .controller('profilController', profilController)
    .service('userService', userService)
    .service('contactService', contactService)
    .filter('filterBySearchFriend', filterBySearchFriend)
    /*.factory('', )*/
    .config(['flowFactoryProvider', function (flowFactoryProvider) {
  flowFactoryProvider.defaults = {
    target: '/upload',
    permanentErrors: [404, 500, 501]
  };
  // You can also set default events:
  flowFactoryProvider.on('catchAll', function (event) {
  });
  // Can be used with different implementations of Flow.js
  // flowFactoryProvider.factory = fustyFlowFactory;
}])
    .run(run);
