myApp.config(function($routeProvider) {
    $routeProvider
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        });
});

myApp.controller('aboutController', function($scope) {
    $scope.title = 'about title';
});
