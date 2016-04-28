function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/accueil.html',
			controller: 'mainController'
		})
		.when('/mentions', {
			templateUrl: 'views/mentions.html',
			controller: 'mainController'
		})
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'mainController'
		})
		.when('/ma-carte', {
			templateUrl: 'views/ma-carte.html',
			controller: 'mainController'
		})
		.when('/mes-contacts', {
			templateUrl: 'views/mes-contacts.html',
			controller: 'mainController'
		})
		.when('/les-elus', {
			templateUrl: 'views/les-elus.html',
			controller: 'mainController'
		})
		.when('/programme-leader', {
			templateUrl: 'views/programme-leader.html',
			controller: 'mainController'
		})
		.when('/mon-profil', {
			templateUrl: 'views/mon-profil.html',
			controller: 'mainController'
		})
		.when('/administration', {
			templateUrl: 'views/administration.html',
			controller: 'mainController'
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
    .service('todoService', todoService)
    /*.factory('', )*/
    .run(run);
