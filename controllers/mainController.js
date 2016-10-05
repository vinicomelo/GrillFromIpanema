myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        });
});

myApp.controller('mainController', function($scope) {
    $scope.title = 'The Grilsdgsdema';
});
