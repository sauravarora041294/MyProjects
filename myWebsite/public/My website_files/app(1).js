app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		url: '/Home',
		templateUrl:'/main.html',
		controller: 'HomeCtrl'
	});
	// .when('/post/:id',{

	// })
});