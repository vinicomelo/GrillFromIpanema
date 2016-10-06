myApp.config(function($routeProvider) {
    $routeProvider
        .when('/meats', {
            templateUrl: 'pages/meats.html',
            controller: 'meatsController'
        });
});

myApp.controller('meatsController', function($scope) {
    $scope.title = 'meats title';
});
