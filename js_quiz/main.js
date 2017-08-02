var data; 
var i=0;
var count=0;
var answer;
var correct_answers=[];
var ans_array=[];
var ans_index=[];
var progress=0;
var rndarr=[];
var prog_length;
$(document).ready(function(){

	$(".buttoncenter").hover(function(){

		$(".buttonmain").fadeIn(2000),function(){
			$(".buttonmain").css("display","block");
		}
		$(".buttoncenter").html("PROCEED TO QUIZ");
	});

$(".buttoncenter").click(function(){
	console.log("fbjdb");
	$(".centerhome").fadeOut(2000, function(){
			$(".quizhome").css("display","block");
		    $(".showhome").fadeIn(3000);
		    $(".qsection").fadeIn(3000);
		    $('body').css("background","linear-gradient(white,black)");
	});
});
});

function showdata(questions){
    data=questions;
    $('input[name="qopt"]').prop("checked",false);
  //  $("#nxtbtn").attr("disabled",true);
    $("#subbtn").attr("disabled",true);
    $("#savebtn").attr("disabled",true);
    prog_length=100/(data.length);
 //  console.log(ansdata);
    progress+=prog_length;
    var rnd=Math.floor(Math.random()*data.length);
    if(!rndarr.includes(rnd)){

    	rndarr.push(rnd);
		i=rnd;
    // console.log("copy "+ rnd);
    // console.log("arr "+ rndarr);

 	  $('#progress').css("width",progress+"%");
 	  $('#progress').html("Question: "+(i+1));
    if(i<data.length){
    $(".quest").html(questions[rnd].quest);
	$("#opt1").html(questions[rnd].options[0]);
	$("#opt2").html(questions[rnd].options[1]);
	$("#opt3").html(questions[rnd].options[2]);
	$("#opt4").html(questions[rnd].options[3]);
    }
	  $("#progress").css("width",progress+"%");

	}else{
	//	console.log("inside else "+ rnd);
		showdata(data);
	}
  }

    $('input[name="qopt"]').change(function(){
    	$("#savebtn").attr("disabled",false);
    	if(count==data.length-1){
    		$("#savebtn").attr("disabled","true");
    	}
    	
    });


	$("#savebtn").click(function(){		
		if(count<data.length){
			answer=parseInt($('input[name="qopt"]:checked').val());
			console.log(answer);
			ans_index.push(answer);
			ans_array.push(data[i].options[answer-1]);
			console.log(ans_array)
			count++;
 	        showdata(data);
			//console.log(ans_array);
	    if(count==data.length-1){
	    	ans_array.push(data[i].options[answer-1]);
			$("#savebtn").attr("disabled",true);
			$("#subbtn").attr("disabled",false);
	    }
	}
	});

	$("#subbtn").click(function(){
		$(".quizhome").fadeOut(2000);
		//$(".quizhome").css("display","none");
		$(".maindiv").fadeIn(4000);
		$(".maindiv").css("display","block");
		var score_index=0;
		while(score_index<data.length){
			
		$(".resultbody").append((score_index+1)+". "+data[i].quest+'<br/>'+ans_array[score_index]+'<br/><br/>');
		score_index++;
	}
    });
    $("#chkscore").click(function(){
    	var countscore=0;
    	var localvar=0;
    	while(localvar<data.length){ console.log(ans_index); console.log(data[i].answer);
    	if(ans_index[localvar]==data[i].answer){
    		console.log("correct");
    		countscore++;
    	}
    	else{
    		console.log("wrong");
    	}
    	localvar++;
    }
    var perc=(countscore/data.length)*100;
      $(".check_score").html("You Scored "+countscore+"/"+data.length+"."+'<br/>'+"Your score is: "+perc+"%");
      $(".check_score").css("color","yellow");

    });
    $("#correct_answers").click(function(){
    	var tmp;
    	$("#correct_answers").css("display","none");
    	var score_index=0;
    	while(score_index<data.length){
    		tmp=parseInt(data[score_index].answer)-1;
    		console.log("index "+score_index)
    		console.log("ans "+tmp);
    		console.log("value"+data[score_index].options[tmp]);
    	$(".correctresultbody").append(data[score_index].quest+'<br/>'+data[score_index].options[tmp]+'<br/><br/>');
    	score_index++;
    }
    });


























