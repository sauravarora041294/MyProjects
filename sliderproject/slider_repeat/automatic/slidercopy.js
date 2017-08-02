//image slider with no-repeat
$(document).ready(function(){
$.ajax({
	dataType:"json",
	url:"http://127.0.0.1:8080/sliderdata.json",
	success: function(data){
		setupSlider(data.imagedata);
	}
});
});
