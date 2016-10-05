myApp.config(function($routeProvider) {
    $routeProvider
        .when('/menu', {
            templateUrl: 'pages/menu.html',
            controller: 'menuController'
        });
});

myApp.controller('menuController', function($scope) {
    $scope.title = 'menu title';
});
