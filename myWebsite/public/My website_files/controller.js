app.controller('HomeCtrl', [ 
	'$scope','$http',function($scope,$http){

		$http.get('http://localhost:3000/getContent').then(function(response){
				console.log(response.data);
				$scope.dbContent=response.data;
			});
		

		$http.get('http://localhost:3000/getData').then(function(response){
			console.log("inside db 2");
			$scope.dbData=response.data;
		});
		}
		]);