function get_html(sliderdata){
var data='';
var banner='';
data+='<div class="container">';
data+='<a href="#" class="prev2"> <-- </a>';
data+='<a href="#" class="next2"> --> </a>';
for(i=0;i<sliderdata.length;i++){
banner+='<div class="slider">';
banner+='<img class="sliderimage" src="'+sliderdata[i].url+'">';
banner+='<div class="text">"'+sliderdata[i].title+'"</div>';
banner+='</div>';
}
data+=banner;
data+='</div>';

$(".slidercontainer").append(data);
$(".prev2").click(function(){
	change(-1);
});
$(".next2").click(function(){
	change(1);
});
function display(n){
	var sliderdiv=$(".slider");
	var len=sliderdiv.length;
	if(len>0) {
		
		if(n<1){
		myindex=len;
	}
	if(n>len){
		myindex=1;
	}
	for(var i=0;i<len;i++){
		sliderdiv[i].style.display="none";
	}
	sliderdiv[myindex-1].style.display="block";
}
}

function change(n){
	display(myindex+=n);
}
var myindex=1;
display(myindex);
}
