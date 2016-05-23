app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
 
    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: 'home.html',
            controller: 'homeCtrl'
        })
        .state('test', {
            url:'/test',
            templateUrl: 'test.html',
            controller: 'testCtrl'
        })
 
}]);