function contactController($scope, $http, $rootScope, contactService, $routeParams) {
    console.log ($routeParams);
  $scope.user = $rootScope.userId;

  contactService.get().then(function (res) {
      $scope.friendlist = res.data

  });


      $scope.add = function () {
          var data = {};
          data.contactVille = $scope.contactVille;
          data.contactFunction = $scope.contactFunction;
          data.contactEmail = $scope.contactEmail;
          data.contactNote = $scope.contactNote;
          data.contactMdp = $scope.contactMdp;
          data.contactName = $scope.contactName;
          data.contactFirstname = $scope.contactFirstname;
          data.contactEnterprise = $scope.contactEnterprise;
          data.contactImg = $scope.contactImg[0];
          data.contactPhone = $scope.contactPhone;
console.log($scope.contactImg[0]);
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


    $scope.band = function() {
        TweenLite.to(angular.element($("#caption")), 2, {
            css: {
                top: 0
            },
            delay: 1,
            ease: Power2.easeOut
        });
    };
    $scope.band();

    //  ------------   Flow   -----------

  	$scope.contactImg = [];
  	// datas.images = [];
  	// datas.push($scope.datas);
  	$scope.processFiles = function (files) {
  		angular.forEach(files, function (flowFile, i) {
  			var fileReader = new FileReader();
  			fileReader.onload = function (event) {
  				var uri = event.target.result;
  				$scope.contactImg[i] = uri;
          console.log($scope.contactImg[0]);
  				// var image = new Object();
  				// image["image"] = $scope.imageStrings[i];
  				// datas.images.push(image);
  				// console.log(datas);
  				// console.log($scope.datas);
  			};
  			fileReader.readAsDataURL(flowFile.file);
  		});
  	};

}
