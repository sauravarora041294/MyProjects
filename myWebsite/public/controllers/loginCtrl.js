app.controller('loginCtrl',[
	'$scope','$http', function($scope,$http){
		
		$scope.login = function(logindetails){
			$http.post(baseurl+'login',logindetails).then(function(response){
				console.log(response);
				console.log(logindetails);
				console.log("login request raised by user...");
				if(response.data.status == 1){
					console.log("success");
					window.location.assign("/Home");
				}
				else{
					console.log(response.data.msg);
				}
			});
	  	}
	}
]);