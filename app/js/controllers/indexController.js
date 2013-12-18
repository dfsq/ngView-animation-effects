app.controller('indexController', ['$scope', function($scope) {

	// All effects list
    $scope.effects = [
        {name: 'Slide', className: 'slide'},
        {name: 'Slidedown', className: 'slidedown'},
        {name: 'Slideup', className: 'slideup'},
        {name: 'Pop in/out', className: 'pop'},
        {name: 'Fade in/out', className: 'fade'}
    ];

    $scope.selectedEffect = $scope.effects[0].className;
    
}]);