var express= require('express');
var nodemailer = require('nodemailer');
//var smtpTransport = require('nodemailer-smtp-transport');
var app= express();
app.use(express.static('public'));
var mongojs= require('mongojs');
var db=mongojs('mywebdb',['mywebdb','mywebdb2']);
var bodyParser = require('body-parser');
var shortid = require('shortid');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('*',function(req, res, next){ console.log('sdfsdf');
	if(req.url.indexOf("api") > -1){
	   next();
	}else{ 
	   res.sendFile(__dirname+'/public/view/home.html');
	}
});

app.get('/api/getContent',function(req,res){
	console.log("inside getContent");
	db.mywebdb.find(function(err,docs){
		console.log("inside getContent-mywebdb");
	   res.json(docs);
	});
});

app.get('/api/getData',function(req,res){
	console.log("inside getData");
	db.mywebdb2.find(function(err,docs){
		console.log("inside mywebdb2- getData");
		res.json(docs);
	});
});

app.get('/api/signup/',function(req,res){
	console.log("request for sign up received");
	res.json({"n":"ds"});
});

app.post('/api/login/',function(req,res){
	db.mywebdb2.findOne({email: req.body.email, password: req.body.password}, function(err, user){
		if(err){
			res.json({ status: 0, msg: err });
		}else if(user === null){
			res.json({ status: 0, msg: 'invalid credentails.' });
		}else{
			if(user.isverified){
				
				res.json({ status: 1, msg: 'login success.' });
				// res.redirect('/Home');
			}else{
				res.json({ status: 0, msg: 'user not verified!' });
			}
		}
	});

});
	
app.post('/api/submit', function(req,res){

		console.log("sign up form submitted..");
		console.log(req.body);
		const id = shortid.generate();
		//console.log(req.body);
db.mywebdb2.save({email:req.body.useremail,password:req.body.userpassword,name:req.body.username, isverified:false, authkey: id}, function(err){
			});

			var transporter = nodemailer.createTransport({
		  		service: 'gmail',
		  		auth: {
		    		user: 'youngtelecaster@gmail.com',
		    		pass: 'beyondlife'
		 			  }
				});

			var mailOptions = {
			 	from: 'youngtelecaster@gmail.com',
			    to: req.body.useremail,
			    subject: 'Verify email id',
			    html: '<h1>Welcome</h1><p>Click the link below to verify your Email-id </p><br><a target="_blank" href="http://localhost:3000/api/verify/'+id+'">'+id+'</a>',
				};

			transporter.sendMail(mailOptions, function(error, info){
		 	if (error) {
		 	    console.log(error);
		  	} 
		  	else {
		    	console.log('Email sent: ' + info.response);
		    }
			});
			res.json({"a":"a"});
			});

app.get('/api/verify/:key', function(req,res){
		var key= req.params.key;
		db.mywebdb2.findOne({authkey: key }, function(err, doc){
			console.log("inside verify");
			if(err){
				res.json(err);
			}else if(doc === null){
				res.json("invalid key!");
			}else{
				doc.isverified = true;
				db.mywebdb2.save(doc, function(err){
					if(err){
						res.json(err);
					}else{
						res.redirect('/login');
					}
				});
				// res.json(docs);
			}
		});
		//res.send("sjgskjdfgkj");
	});

//app.get('/api/demo', function(req,res){
	

// 	var transporter = nodemailer.createTransport({
// 	   service: 'gmail',
// 	   auth: {
// 	       user: 'loveyraturi@gmail.com',
// 	       pass: 'lnoevheay'
// 	   }
// 	});
// 	 var data={

// 	   from: 'loveyraturi@gmail.com',
// 	   to: 'youngtelecaster@gmail.com',
// 	   subject: 'hello',
// 	   html: '<b>hello world!</b>',
// 	   text: 'hello world!'
// 	};
// 	transporter.sendMail(data, function(error, info){
//   			if (error) {
//     			console.log(error);
//  			 } 
//  			else {
//     			console.log('Email sent: ' + info.response);
//  			 }
// });



		

	//});	
//});
app.get('/api/:id',function(req,res){
	//console.log(req.params);
	var id=req.params.id;
	var name=req.params.name;
	db.mywebdb.find({ _id: mongojs.ObjectId(id) },function(err,docs){
		//console.log(docs[0].Name);;
		res.json(docs[0]);	

	});	
});
app.listen(3000);
console.log("server running");