// socket.ts
import { io, Socket } from 'socket.io-client'

const SOCKET_SERVER_URL = 'http://localhost:5000'

// Create a single instance of Socket.IO
const socket: Socket = io(SOCKET_SERVER_URL)

export default socket
