app.directive('backAnimation', ['$browser', '$location', function($browser, $location) {
	return {
		link: function(scope, element) {

			$browser.onUrlChange(function(newUrl) {
				if ($location.absUrl() === newUrl) {
					console.log('Back');
					element.addClass('reverse');
				}
			});

			scope.__childrenCount = 0;
			scope.$watch(function() {
				scope.__childrenCount = element.children().length;
			});

			scope.$watch('__childrenCount', function(newCount, oldCount) {
				if (newCount !== oldCount && newCount === 1) {
					element.removeClass('reverse');
				}
			});
		}
	};
}]);
