myApp.config(function($routeProvider) {
    $routeProvider
        .when('/drinks', {
            templateUrl: 'pages/drinks.html',
            controller: 'drinksController'
        });
});

myApp.controller('drinksController', function($scope) {
    $scope.title = 'drinks title';
});
