// src/functions/CreatingChatList.js
import { io } from 'socket.io-client'

// URL of your Socket.IO server
const SOCKET_SERVER_URL = 'http://localhost:PORT' // Replace PORT with your server port

export const connectToWebSocket = (userId: string, onChatUpdate: any) => {
  // Establish a WebSocket connection
  const socket = io(SOCKET_SERVER_URL)

  // Emit the UserAdded event with the userId
  socket.emit('UserAdded', userId)

  // Set up a listener for chat updates
  socket.on('chatUpdate', (chatData) => {
    onChatUpdate(chatData) // Call the callback function with the received chat data
  })

  return socket
}
