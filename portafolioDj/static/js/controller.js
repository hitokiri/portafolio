var PortafolioBlog = angular.module('PortafolioBlog', ["ngRoute"]).
filter('quitar', function() {
    return function(input) {
      input = input || '';
      var out = "";
      out = input.replace(/<[^>]*>/g, '');
      out = out.replace(/&nbsp;/g, '');
      // conditional based on optional argument

      return out;
    };
  }).
controller('BlogCtrl', ['$scope','$http', function ($scope,$http) {
	$scope.method = 'GET';
	$scope.url2 = 'https://www.googleapis.com/blogger/v3/blogs/7610380627270839038/posts?userIp=190.99.25.97&key=AIzaSyCZsHhv72zpjDni3ZT1Sw6uGIGEQCmgqCw';
	$http({method: $scope.method, url: $scope.url2}).success(function(data){
		$scope.datos1 = data;
		console.log(data);
	});

	// $scope.datosResourse = dataResource();
}]);

var Portafolio = angular.module('Portafolio', ["ngRoute"]);

Portafolio.controller('TrabajoCtrl', ['$scope','$http', function ($scope,$http) {
	$scope.method = 'GET';
	$scope.url = 'https://api.github.com/users/hitokiri/repos';
	$http({method: $scope.method, url: $scope.url}).success(function(data){		
		$scope.datos = data;

	});

	// $scope.datosResourse = dataResource();
}]);


// Portafolio.factory('dataResource', [function ($resource) {
// 	$scope.method = 'GET';
// 	$scope.url = 'https://api.github.com/users/hitokiri/repos';
// 	$http({method: $scope.method, url: $scope.url}).success(function(data){
// 		$scope.datos = data;
// 	return data;
// 	})
// }])

