var express=	require('express');
var app= express();
var mongojs=require('mongojs');
var db=mongojs('contactlist',['contactlist']);
var bodyParser=require('body-parser');

app.use(express.static(__dirname+ "/public"));
//app.use("images", express.static(__dirname+ "/media/views/dirr/images")); -- used to map th url to "/images"
app.use(bodyParser.json());


app.get('/contactlist',function(req,res){
	console.log("I received a get request");

	db.contactlist.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});

//listens for the post req from the controller..
app.post('/contactlist',function(req,res){
	console.log(req.body); // server does'nt know how to parse the body-- use 'body-parser' module
	db.contactlist.insert(req.body,function(err,doc){
		res.json(doc);
	});
});


app.delete('/contactlist/:id',function(req,res){
	var id = req.params.id;
	console.log(id);
	db.contactlist.remove({_id: mongojs.ObjectId(id)},function(err,doc){
		console.log(doc);
		res.json(doc);
	});
});


app.get('/contactlist/:id',function(req,res){
	var id=req.params.id;
	console.log(id);
	db.contactlist.findOne({_id:mongojs.ObjectId(id)},function(err,doc){
		//converts the received string id to mongojs object. (_id is the default field name in mongodb).
		res.json(doc);
	});
});


app.put('/contactlist/:id', function(req,res){
	var id=req.params.id; // receives the id from requested url -- 'contactlist/:id/:name' -- accessed by 'req.params.name'
	console.log(req.body.name);
	db.contactlist.findAndModify({
		query : {_id:mongojs.ObjectId(id)},
		update: {$set:{name : req.body.name, email : req.body.email, number: req.body.number }},
		new   : true} , function(err,doc){
			res.json(doc);
		});
});


app.listen(3000);
console.log("server running at port 3000");