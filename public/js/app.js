function config($routeProvider ,$httpProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/accueil.html',
            controller: 'userController'
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
            controller: 'contactController',
            resolve: {
                connected: checkIsConnected
            }
        })
        .when('/forgetPassword', {
            templateUrl: 'views/forgetPassword.html',
            controller: 'connexionController'
        })
        .when('/ma-carte', {
            templateUrl: 'views/ma-carte.html',
            controller: 'carteController',
            resolve: {
                connected: checkIsConnected
            }
        })
        .when('/mes-contacts', {
            templateUrl: 'views/mes-contacts.html',
            controller: 'contactController',
            resolve: {
                connected: checkIsConnected
            }
        })

    .when('/mon-profil', {
            templateUrl: 'views/mon-profil.html',
            controller: 'profilController',
            resolve: {
                connected: checkIsConnected
            }
        })
        .when('/administration', {
            templateUrl: 'views/administration.html',
            controller: 'userController',
            resolve: {
                connected: checkIsAdmin
            }
        })
        .otherwise({
            redirectTo: '/'
        });


        $httpProvider.interceptors.push(function ($q, $location, $rootScope) {
         return {
             'request': function (config) {
                 config.headers = config.headers || {};
                 if ($rootScope.token) {
                     config.headers.authorization = $rootScope.token;
                 }
                 return config;
             },
             'responseError': function (response) {
                 if (response.status === 401 || response.status === 403) {
                     $location.path('/');
                 }
                 return $q.reject(response);
             }
         };
      });
}

function checkIsConnected($q, $http, $rootScope, $location) {
    var deferred = $q.defer();

    $http.get('/loggedin').success(function () {
        // Authenticated
        deferred.resolve();
    }).error(function () {
        // Not Authenticated
        deferred.reject();
        $location.url('/connexion');
    });

    return deferred.promise;
};

function checkIsAdmin($q, $http, $rootScope, $location) {
    var deferred = $q.defer();

    if ($rootScope.user && $rootScope.user.isAdmin)
      deferred.resolve();
    else {
        deferred.reject();
        $location.url('/');
    }

    return deferred.promise;
};

function run($rootScope, $location) {
    var path = function() {
        return $location.path();
    };
    $rootScope.$watch(path, function(newVal, oldVal) {
        $rootScope.activetab = newVal;
    });
    $rootScope.logout = function(){
      $rootScope.token = null;
      $rootScope.user = null;
    }
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
                    if (!!e.contactEnterprise) {
                        if (e.contactEnterprise.toLowerCase().indexOf(searchFriend.toLowerCase()) != -1) {
                            if(!hasPush) newArray.push(e);
                            hasPush = true;
                        }
                    }
                    if (!!e.contactFunction) {
                        if (e.contactFunction.toLowerCase().indexOf(searchFriend.toLowerCase()) != -1) {
                            if(!hasPush) newArray.push(e);
                            hasPush = true;
                        }
                    }
                    if (!!e.contactVille) {
                        if (e.contactVille.toLowerCase().indexOf(searchFriend.toLowerCase()) != -1) {
                            if(!hasPush) newArray.push(e);
                            hasPush = true;
                        }
                    }
                    if (!!e.contactName) {
                        if (e.contactName.toLowerCase().indexOf(searchFriend.toLowerCase()) != -1) {
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



angular.module('app', ['ngRoute','monospaced.qrcode','flow', 'angularUtils.directives.dirPagination'])
    .config(config)
    .controller('mainController', mainController)
    .controller('contactController', contactController)
    .controller('connexionController', connexionController)
    .controller('carteController', carteController)
    .controller('mentionsController', mentionsController)
    .controller('userController', userController)
    .controller('profilController', profilController)
    .service('userService', userService)
    .service('bureauService', bureauService)
    .service('contactService', contactService)
    .service('temoignageService', temoignageService)
    .service('agendaService', agendaService)
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
