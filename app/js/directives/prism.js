app.directive('nagPrism', function() {
	return {
		link: function(scope, element) {
			Prism.highlightElement(element.find('code')[0]);
		}
	};
});