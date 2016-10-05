myApp.config(function($routeProvider) {
    $routeProvider
        .when('/tapas', {
            templateUrl: 'pages/tapas.html',
            controller: 'tapasController'
        });
});

myApp.controller('tapasController', function($scope) {
    $scope.title = 'tapas title';
});
