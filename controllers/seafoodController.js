myApp.config(function($routeProvider) {
    $routeProvider
        .when('/seafood', {
            templateUrl: 'pages/seafood.html',
            controller: 'seafoodController'
        });
});

myApp.controller('seafoodController', function($scope) {
    $scope.title = 'seafood title';
});
