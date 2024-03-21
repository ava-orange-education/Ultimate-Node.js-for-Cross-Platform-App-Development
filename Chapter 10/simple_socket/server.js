var express = require('express'),
  app = express(),
  http = require('http'),
  socketIO = require('socket.io'),
  server, io;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server = http.Server(app);
server.listen(5000);

io = socketIO(server);

io.on('connection', function (socket) {
  socket.emit('ping-from-server', {
    greeting: 'My first Socket programming'
  });
  socket.on('ping-from-client', function (message) {
    console.log(message);
  });
});