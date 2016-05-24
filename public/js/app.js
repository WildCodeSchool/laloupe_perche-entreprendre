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
        .when('/formulaire', {
            templateUrl: 'views/formulaire.html',
            controller: 'connexionController'
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
            controller: 'adminController'
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

angular.module('app', ['ngRoute'])
    .config(config)
    .controller('mainController', mainController)
    .controller('contactController', contactController)
    .controller('connexionController', connexionController)
    .controller('carteController', carteController)
    .controller('mentionsController', mentionsController)
    .controller('adminController', adminController)
    .controller('profilController', profilController)
    .service('todoService', todoService)
    .service('connexionService', connexionService)
    .service('contactService', contactService)
    .filter('filterBySearchFriend', filterBySearchFriend)
    /*.factory('', )*/
    .run(run);
