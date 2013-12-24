app.controller('pageController', ['$scope', '$location', '$routeParams', '$http', function($scope, $location, $routeParams, $http) {

    $scope.pageId = $routeParams.pageId || 1;
    
    $scope.nextPage = function() {
        $scope.pageId = (++$scope.pageId % 4) || 1;
        $location.path("/page/" + $scope.pageId);
    };

	$scope.pageClass = 'page-' + $scope.pageId;


	// For New York page get current weather forecast
	if (+$routeParams.pageId === 2) {
		var url = [
			'https://api.forecast.io/forecast',
			'b203fbb200830c93e75ba5a49bde0b1b',
			'40.67,-73.94',
			'?callback=JSON_CALLBACK'
		].join('/');

		$http.jsonp(url).success(function(data) {
			$scope.weather = data;
			window.weather = data;
		});
	}
}]);