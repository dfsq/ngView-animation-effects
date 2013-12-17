var app = angular.module('ngViewEffects', [
	'ngRoute',
	'ngAnimate'
]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/page/:pageId', {
            controller: 'pageController',
            templateUrl: function(params) {
                return 'views/page' + params.pageId + '.html';
            }
        })
        .otherwise({
        	redirectTo: '/page/1'
        });
});