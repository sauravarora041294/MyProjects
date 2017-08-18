app.controller('HomeCtrl', [ 
	'$scope','$http','$routeParams',function($scope,$http,$routeParams){
		var name=$routeParams.name;

		$scope.oldname = { myname: 'saurav (getting this data from a directive)'};
		$scope.newname = { myname:'Dev (getting this data from a directive)'};
		$scope.test = { value : "a random value" };

		$http.get(baseurl+'getContent').then(function(response){
				console.log(response.data);
				$scope.dbContent=response.data;
			});
		
		$http.get(baseurl+'getData').then(function(response){
			console.log("inside db 2");
			$scope.dbData=response.data;
		});

		// var id = $routeParams.id;
		// console.log("hello-- in Appctrl");
		// $http.get(baseurl+'/getContent/'+id).then(function(response){
		// 		console.log("id....");
		// 		console.log(response);
		// });
	}
		]);

app.directive('myDir',function(){
	return{
		scope : {
			myvar : '=info'
		},
		template : '<h1> hello {{myvar.myname}} </h1>',
	};
});

app.controller('newctrl' function newctrl(){
app.component('comp',{
	templateUrl : '../view/tmp.html',
	bindings : {
		hero : '='
	}
}
});