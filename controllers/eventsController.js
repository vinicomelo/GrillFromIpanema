myApp.config(function($routeProvider) {
    $routeProvider
        .when('/events', {
            templateUrl: 'pages/events.html',
            controller: 'eventsController'
        });
});

myApp.controller('eventsController', function($scope) {
    $scope.title = 'events title';
});
