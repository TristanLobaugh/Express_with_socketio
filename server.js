var express = require('express');
var app = express();
console.log(app.get);
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
users= [];
connections = [];



app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket){
	connections.push(socket);
	console.log('Connected: %s sockets connected', connections.length);


	socket.on('disconnect', function(data){
		connections.splice(connections.indexOf(socket), 1);
		console.log('Disconnected: %s sockets connected', connections.length);
	})
});;


server.listen(process.env.port || 3555);
console.log('server running on port 3555');