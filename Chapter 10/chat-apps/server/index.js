const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const socketConnection = require('./connection');

const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
} = require('./users');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

socketConnection(io);


server.listen(process.env.PORT || 8081, (err) => {

  if (err)
    console.log(err);

  console.log(`Server has started.`)
});