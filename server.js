const express = require('express')
const path = require('path')
const http = require('http')
const PORT = process.env.PORT || 3000
const socketio = require('socket.io')
const { Socket } = require('dgram')

const app = express();
const server  = http.createServer(app)
const io = socketio(server)

//set static folder 
app.use(express.static(path.join(__dirname, "public")))

//start server
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

//handle a socket connection request from web client
const connections = [null, null]

io.on('connection', socket =>{
    //console.log('new connection')

    //find available player
    let playerIndex = -1;
    for(const i in connections) {
        if(connections[i] === null)
        {
            playerIndex = i
            break
        }
    }

    

    //tell the connection client what player number they are
    socket.emit('player-number', playerIndex)

    console.log(`Player ${playerIndex} has connected`)

    //ignore player 3
    if(playerIndex === -1) return

    connections[playerIndex] = false

    //tell everyone what player just connected
    socket.broadcast.emit('player-connection', playerIndex)
})