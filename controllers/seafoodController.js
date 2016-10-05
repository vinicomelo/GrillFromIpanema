myApp.config(function($routeProvider) {
    $routeProvider
        .when('/saefood', {
            templateUrl: 'pages/saefood.html',
            controller: 'saefoodController'
        });
});

myApp.controller('saefoodController', function($scope) {
    $scope.title = 'saefood title';
});
