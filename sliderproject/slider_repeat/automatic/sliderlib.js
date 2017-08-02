
$(document).ready(function () {
											

function setupSlider(bannerData){
	var _data = '';
	var banners = '';
	var links = '';
	_data+= '<div class="container3">';
	_data+= '<a href="#" class="prev3" id="prevv"> <-- </a>';
	_data+= '<a href="#" class="next3" id="nextt" > --> </a>';
	
	for(var i=0;i<bannerData.length;i++){ 
		banners+= '<div class="slider3" >';
		banners+= '<img class="sliderimage3" src="'+bannerData[i].url+'" />';
		banners+= '<div class="text3">'+bannerData[i].title+'</div>';
		banners+= '</div>';

		links+= '<div class="dotdiv">';
		links+= '<div class="dot" data-val="'+(i+1)+'"></div>';
		links+= '</div>'

	}
	_data+= banners;
	_data+= '</div><br>';
	_data+= links;

	$("#sliderBox").append(_data);
}

var myindex=1;
display(myindex);

function current(n){
	display(myindex=n)
}

function change(n){ 
	display(myindex+=n);
}

function display(n){
	var sliderdiv=$('.slider3');
	var dots=$('.dot');
	var len=sliderdiv.length;
	$('#nextt').css("pointerEvents","auto");
	$('#prevv').css("pointerEvents","auto");
	if(n<=1){
		myindex=1;
		$('#prevv').css("pointerEvents","none");
	}
	if(n>=len){
		myindex=len;
		$('#nextt').css("pointerEvents","none");
	}
	for(var i=0;i<len;i++){
		sliderdiv[i].style.display="none";
	}

	for(i=0;i<dots.length;i++){
		dots[i].className=dots[i].className.replace("active","");
	}
	sliderdiv[myindex-1].style.display="block";
	dots[myindex-1].className+=" active"
}

$("#prevv").click(function(){
	change(-1);
});
$("#nextt").click(function(){
	change(1);
});
$(".dot").click(function(){
	current($(this).data('val'));
});
           setupSlider(slideData);	
});
