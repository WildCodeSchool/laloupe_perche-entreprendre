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
		.when('/createprofile', {
		templateUrl: 'views/createprofile.html',
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
		.when('/administration', {
			templateUrl: 'views/administration.html',
			controller: 'adminController'
		})
		.otherwise({
			redirectTo: '/'
		});
}
function run($rootScope, $location){
	var path = function() { return $location.path(); };
	$rootScope.$watch(path, function(newVal, oldVal){
		$rootScope.activetab = newVal;
	});
}

angular.module('app', ['ngRoute'])
    .config(config)
    .controller('mainController', mainController)
		.controller('connexionController', connexionController)
		.controller('contactController', contactController)
		.controller('carteController', carteController)
		.controller('mentionsController', mentionsController)
		.controller('adminController', adminController)
		.controller('profilController', profilController)
    .service('todoService', todoService)
		.service('connexionService', connexionService)
    /*.factory('', )*/
    .run(run);
