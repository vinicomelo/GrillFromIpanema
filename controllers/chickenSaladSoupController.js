myApp.config(function($routeProvider) {
    $routeProvider
        .when('/chickenSaladSoup', {
            templateUrl: 'pages/chickenSaladSoup.html',
            controller: 'chickenSaladSoupController'
        });
});

myApp.controller('chickenSaladSoupController', function($scope) {
    $scope.title = 'chickenSaladSoup title';
});
