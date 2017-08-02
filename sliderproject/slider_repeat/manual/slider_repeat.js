$(document).ready(function(){ 
$.ajax({
	dataType:"json",
	url:"http://127.0.0.1:8080/sliderdata.json",
	success: function(data){
        get_html(data.imagedata);
	}
});
});