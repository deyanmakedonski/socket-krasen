const express = require('express')
const config = require('./config')
const io = require('socket.io')
const app = express()
const http = require('http').Server(app);
const socketConnector = io(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})

const port = process.env.PORT || 3000
const cors = require('cors')
const SocketHandlerInstance = require("./handlers/SocketHandler");
app.use(cors())

app.get('/', (req, res) => {
  res.json(config)
})


socketConnector.on('connection', (socket) => {
  console.log('New connection:', socket.id)
  new SocketHandlerInstance(socket)
});

http.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
