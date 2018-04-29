var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(18080); 
var connected_users = [];

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket){
	console.log('connection created... connected at port 18080');
	socket.on('username-submit', function(data,callback) {
		if(connected_users.indexOf(data) != -1){
			callback(false);
		} else {
			callback(true);
			socket.username= data;
			console.log('username',socket.username);
			connected_users.push(socket.username);
			updateUsers();	
		}		
	});

	function updateUsers(){
		io.sockets.emit('users', connected_users);
	}

	socket.on('send', function(data) {
		io.sockets.emit('message', {msg: data, username: socket.username} );
	});

	socket.on('disconnect', function(data) {
		if(!socket.username){
			return;
		} else {
			connected_users.splice(connected_users.indexOf(socket.username),1);
			updateUsers();
		}

	});

});