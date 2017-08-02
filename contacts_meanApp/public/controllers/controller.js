var baseUrl='http://localhost:3000/';
var MyApp= angular.module('MyApp',[]);
  MyApp.controller('AppCtrl',[
 		'$scope',
		'$http',
		'$filter',
			function($scope,$http,$filter){
				console.log("Hello world from controller");
// 
					var refresh=function(){
						$http.get(baseUrl+'contactlist').then(function(response){
						console.log(response.data);
						$scope.contactlist=response.data;
						$scope.contact= {};
					});
			};

			refresh();

				$scope.addContact=function(){
					console.log($scope.contact);
					$http.post(baseUrl+'contactlist',$scope.contact).then(function(response){
					console.log(response);
					refresh();
					});
				};
				$scope.remove = function(id){
					console.log(id);
					$http.delete(baseUrl+'contactlist/' + id).then(function(response){
						refresh();
					});
				};
				$scope.edit = function(id){
					console.log(id);
					$http.get(baseUrl+'contactlist/'+ id).then(function(response){
						$scope.contact=	response.data;
						console.log($scope.contact);
					});

				};
				$scope.update = function(){
					console.log($scope.contact._id);
					$http.put(baseUrl+'contactlist/' + $scope.contact._id, $scope.contact).then(function(response){
						refresh();
					});
				}
				$scope.diselect = function(){
					$scope.contact={};
				}

				$scope.sortasc = function(data){
					//$scope.arr=[];
					$scope.contactlist=$filter('orderBy')($scope.contactlist,data,false);
					//$scope.arr=$scope.contactlist;
				}
				$scope.sortdesc = function(data){
					//$scope.arr=[];
					$scope.contactlist=$filter('orderBy')($scope.contactlist,data,true);
					//$scope.arr=$scope.contactlist;
				}


}]);