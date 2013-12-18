app.controller('pageController', function($scope, $location, $routeParams) {
    
    $scope.pageId = $routeParams.pageId || 1;
    
    $scope.nextPage = function() {
        $scope.pageId = (++$scope.pageId % 4) || 1;
        $location.path("/page/" + $scope.pageId);
    };

	$scope.pageClass = 'page-' + $scope.pageId;
});