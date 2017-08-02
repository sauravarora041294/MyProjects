
$.ajax({
	url:"http://127.0.0.1:8080/questions.json",
	success:function(data){
      console.log(data);
      showdata(data.question);
	}
	});