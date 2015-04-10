app.controller('indexController', ['$scope', '$route', function($scope, $route) {

	// All effects list
    $scope.effects = [
        {name: 'Slide', className: 'slide'},
        {name: 'Slidedown', className: 'slidedown'},
        {name: 'Slideup', className: 'slideup'},
        {name: 'Pop in/out', className: 'pop'},
        {name: 'Fade in/out', className: 'fade'},
        {name: 'Flip', className: 'flip'},
		{name: 'Rotate', className: 'rotate'},
		{name: 'Slide + Pop in', className: 'slide-pop'}
    ];

	$scope.effect = $scope.effects[0].className;

	// Current menu item
	$scope.isActive = function(path) {
		if ($route.current && $route.current.regexp) {
			return $route.current.regexp.test(path);
		}
		return false;
	};
}]);