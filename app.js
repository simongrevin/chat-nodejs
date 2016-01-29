var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Express Server
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// Http listen
http.listen(3000, function(){
  console.log('listening on *:3000');
});

// Socket.io socket
io.on('connection', function(socket){
  console.log('user connected');

  socket.on('disconnect', function(){
    console.log('user left');
  });

  socket.on('chat-message', function(msg){
    console.log(msg);
    io.emit('new-message', msg);
  });

});
