function contactController($scope, $http, $rootScope, contactService, $routeParams) {
  $scope.user = $rootScope.userId;
load();
function load (){
  contactService.get().then(function (res) {
      $scope.friendlist = res.data
      console.log($scope.friendlist.contactImg);

  });
}



      $scope.add = function () {
          var data = {};
          data.contactVille = $scope.contactVille;
          data.contactImg = $scope.contactImg[0];
          data.contactFunction = $scope.contactFunction;
          data.contactEmail = $scope.contactEmail;
          data.contactNote = $scope.contactNote;
          data.contactMdp = $scope.contactMdp;
          data.contactName = $scope.contactName;
          data.contactFirstname = $scope.contactFirstname;
          data.contactEnterprise = $scope.contactEnterprise;
          data.contactPhone = $scope.contactPhone;
          data.userId = $routeParams.userId; // ID de l'elu (lors du clic sur la carte)
          contactService.create(data).then(function (res) {

          });
          $scope.contactEmail = "";
          $scope.contactMdp = "";
          $scope.contactVille = "";
          $scope.contactName = "";
          $scope.contactFunction = "";
          $scope.contactImg = [];
          $scope.contactNote = "";
          $scope.contactEnterprise = "";
          $scope.contactFirstname = "";
          $scope.contactPhone = "";
      }



    //  ------------   Flow   -----------

  	$scope.contactImg = [];

  	$scope.processFiles = function (files) {
  		angular.forEach(files, function (flowFile, i) {
  			var fileReader = new FileReader();
  			fileReader.onload = function (event) {
  				var uri = event.target.result;
  				$scope.contactImg[i] = uri;


  			};
  			fileReader.readAsDataURL(flowFile.file);
  		});
  	};
    $scope.cancel = function(image) {
      image.cancel();
    };

  //   function readURL(input) {
  //      if (input.files && input.files[0]) {
  //          var reader = new FileReader();
   //
  //          reader.onload = function (e) {
  //              $('#blah').attr('src', e.target.result);
  //          }
   //
  //          reader.readAsDataURL(input.files[0]);
  //      }
  //  }
   //
  //  $("#imgInp").change(function(){
  //      readURL(this);
  //  });

}
