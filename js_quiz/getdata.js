
$.ajax({
	url:"http://127.0.0.1:18080/questions.json",
	success:function(data){
      console.log(data);
      showdata(data.question);
	}
	});