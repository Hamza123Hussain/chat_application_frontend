// socket.ts
import { io, Socket } from 'socket.io-client'

const SOCKET_SERVER_URL = 'http://localhost:5000'

// Create a single instance of Socket.IO
const socket: Socket = io(SOCKET_SERVER_URL)

export default socket

/**    socket.emit('Chat', 'ezisEbOzjcS1aFzX21Tp')

    // Listener for 'MessageReceived' event from the server
    socket.on('ChatData', (data) => {
      console.log('Received data from server:', data)

      // Process the received chat data here
    })

    // Cleanup on component unmount */
