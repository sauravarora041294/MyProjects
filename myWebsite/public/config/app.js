app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		url: '/Home',
		templateUrl:'view/main.html',
		controller: 'HomeCtrl'
	})
	.when('/Home', {
		templateUrl:'view/main.html',
		controller: 'HomeCtrl'
	})
	.when('/signup',{
		templateUrl : 'view/signup.html',
		controller : 'signupCtrl'
	})
	.when('/login',{
		templateUrl : 'view/login.html',
		controller : 'loginCtrl'
	})
	.when('/:id', {
		templateUrl : 'view/pageView.html',
		controller  : 'PageCtrl'
	});
	$locationProvider.html5Mode(true);
});