// MAIN CONTROLLER
function mainController($scope, $http, todoService) {
	$scope.title = "Todo List";
	$scope.content = '';
	$('html, body').animate({ scrollTop: 0 }, 'swing');
	function load(){
		todoService.get().then(function(res){
			$scope.todos = res.data;
		});
	}
	$scope.add = function(){
		var data = {};
		data.description = $scope.description;
		todoService.create(data).then(function(res){
			load();
		});
		$scope.description = "";
	}
	$scope.update = function(todo){
		todoService.update(todo._id, todo).then(function(res){
			load();
		});
	}
	$scope.delete = function(todo){
		todoService.delete(todo._id).then(function(res){
			load();
		});
	}
	load();


	//========================== BOUTON =========================

	$(document).ready(function(){
	  TweenLite.to($("#caption"),2,{css:{top:0},delay:1, ease:Power2.easeOut});
	  TweenLite.to($("#btn1"),2,{css:{left:0},delay:2, ease:Power2.easeOut});
	  TweenLite.to($("#btn2"),2,{css:{left:20},delay:2.5, ease:Power2.easeOut});
	  TweenLite.to($("#btn3"),2,{css:{left:0},delay:3, ease:Power2.easeOut});
	  TweenLite.to($("#btn4"),2,{css:{left:20},delay:3.5, ease:Power2.easeOut});
	  TweenLite.to($("#btn5"),2,{css:{left:20},delay:4, ease:Power2.easeOut});
	  TweenLite.to($("#btn6"),2,{css:{left:40},delay:4.5, ease:Power2.easeOut});

	  });


	  $scope.btn1 = function(){
		  TweenLite.to($("#content"),0.5,{css:{top:0}, ease:Power2.easeOut});
		  TweenLite.to($("#backbutton"),1,{css:{left:650, rotation:-180}, ease:Power2.easeOut});
		  TweenLite.to($("#pagecaption"),1,{css:{top:0}, ease:Power2.easeOut});
		  TweenLite.to($("#caption"),1,{css:{top:90}, ease:Power2.easeOut});
		  $("#pagecaption").text("UN ÉCOSYSTÈME DYNAMIQUE");
			$scope.content = 'ecosysteme';
	  };

	  $scope.btn2 = function(){
		  TweenLite.to($("#content"),0.5,{css:{top:0}, ease:Power2.easeOut});
		  TweenLite.to($("#backbutton"),1,{css:{left:650, rotation:-180}, ease:Power2.easeOut});
		  TweenLite.to($("#pagecaption"),1,{css:{top:0}, ease:Power2.easeOut});
		  TweenLite.to($("#caption"),1,{css:{top:90}, ease:Power2.easeOut});
		  $("#pagecaption").text("UN POSITIONNEMENT STRATÉGIQUE");
			$scope.content = 'positionnement';

	  };

	  $scope.btn3 = function(){
		  TweenLite.to($("#content"),0.5,{css:{top:0}, ease:Power2.easeOut});
		  TweenLite.to($("#backbutton"),1,{css:{left:650, rotation:-180}, ease:Power2.easeOut});
		  TweenLite.to($("#pagecaption"),1,{css:{top:0}, ease:Power2.easeOut});
		  TweenLite.to($("#caption"),1,{css:{top:90}, ease:Power2.easeOut});
		  $("#pagecaption").text("UN ACCOMPAGNEMENT PRIVILÉGIÉ !!");
			$scope.content = 'accompagnement';

	  };

	  $scope.btn4 = function(){
		  TweenLite.to($("#content"),0.5,{css:{top:0}, ease:Power2.easeOut});
		  TweenLite.to($("#backbutton"),1,{css:{left:650, rotation:-180}, ease:Power2.easeOut});
		  TweenLite.to($("#pagecaption"),1,{css:{top:0}, ease:Power2.easeOut});
		  TweenLite.to($("#caption"),1,{css:{top:90}, ease:Power2.easeOut});
		  $("#pagecaption").text("UN ENVIRONNEMENT DE QUALITÉ");
			$scope.content = 'environnement';

	  };

	  $scope.btn5 = function(){
		  TweenLite.to($("#content"),0.5,{css:{top:0}, ease:Power2.easeOut});
		  TweenLite.to($("#backbutton"),1,{css:{left:650, rotation:-180}, ease:Power2.easeOut});
		  TweenLite.to($("#pagecaption"),1,{css:{top:0}, ease:Power2.easeOut});
		  TweenLite.to($("#caption"),1,{css:{top:90}, ease:Power2.easeOut});
		  $("#pagecaption").text("Contact Us");

	  };

	  $scope.btn6 = function(){
		  TweenLite.to($("#content"),0.5,{css:{top:0}, ease:Power2.easeOut});
		  TweenLite.to($("#backbutton"),1,{css:{left:650, rotation:-180}, ease:Power2.easeOut});
		  TweenLite.to($("#pagecaption"),1,{css:{top:0}, ease:Power2.easeOut});
		  TweenLite.to($("#caption"),1,{css:{top:90}, ease:Power2.easeOut});
		  $("#pagecaption").text("Feedback");

	  };


	   $("#backbutton").click(function(){
		    TweenLite.to($("#content"),1,{css:{top:1000}, ease:Power2.easeIn});
			TweenLite.to($("#backbutton"),1,{css:{left:760, rotation:0}, ease:Power2.easeIn});
			TweenLite.to($("#pagecaption"),1,{css:{top:-60}, ease:Power2.easeOut});
			TweenLite.to($("#caption"),1,{css:{top:0}, ease:Power2.easeOut});
		});

		//========================== BOUTON =========================

}
