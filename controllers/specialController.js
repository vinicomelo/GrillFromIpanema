myApp.config(function($routeProvider) {
    $routeProvider
        .when('/special', {
            templateUrl: 'pages/special.html',
            controller: 'specialController'
        });
});

myApp.controller('specialController', function($scope) {
    $scope.title = 'special title';
});
