app.controller('PageCtrl',[
	'$scope','$http','$routeParams', function($scope,$http,$routeParams){
		var img_id= 0;
		var id = $routeParams.id;
		var data_length;
		var nx_btn= document.getElementById("nxt-btn");
		var pv_btn= document.getElementById("prev-btn");
		pv_btn.disabled= true;
		var viewpage = function(){ 
			$http.get('api/'+id).then(function(response){
			  		//$scope.viewdata={};
			  		console.log(response.data);
					 $scope.viewdata=response.data.data[img_id];
					 $scope.mainData=response.data;
					 data_length=response.data.data.length;
			   });
			};

		viewpage();	

		$scope.movenext = function(){
			if(img_id < data_length-1 ){
				if(img_id == data_length-2 ){
		  			console.log(img_id);
		  			nx_btn.disabled=true;
		  			pv_btn.disabled=false;
		  			//img_id = 0;
		  		}
		  		++img_id;
		  		console.log(img_id);
		  		pv_btn.disabled=false;
		  	}
		  	viewpage();
		  };

		$scope.moveprev = function(){
			
			if(img_id > 0){
				if(img_id == 1){
					pv_btn.disabled= true;
					nx_btn.disabled= false;
				}
				--img_id;
				nx_btn.disabled=false;
			}
			
			viewpage();
		};

	}]);