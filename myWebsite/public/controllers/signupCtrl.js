app.controller('signupCtrl',[
	'$scope','$http', function($scope,$http){

		 $scope.signup = function(){
		 	$http.get(baseurl+'signup').then(function(response){
			console.log("request for signup received by user...");
		});
		 };

		// $scope.user={};
 	$scope.getinfo = function(user){
 		$http.post(baseurl+'submit', $scope.user).then(function(response){
	 		console.log(user.username);
	 		console.log(user.useremail);
	 		console.log(user.userpassword);
 		});
 		
 	};	

	}
	])