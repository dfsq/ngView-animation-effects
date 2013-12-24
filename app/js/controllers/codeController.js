app.controller('codeController', ['$scope', function($scope) {
	$scope.pageClass = 'page-code';

	$scope.backToPages = function(event) {
		event.preventDefault();
		window.history.back();
	};
}]);
