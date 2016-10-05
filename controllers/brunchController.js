myApp.config(function($routeProvider) {
    $routeProvider
        .when('/brunch', {
            templateUrl: 'pages/brunch.html',
            controller: 'brunchController'
        });
});

myApp.controller('brunchController', function($scope) {
    $scope.title = 'brunch title';
});
