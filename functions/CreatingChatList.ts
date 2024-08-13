import axios from 'axios'

// Function to initiate WebSocket connection and send user ID
export const connectToWebSocket = (userId: String) => {
  const socket = new WebSocket('ws://localhost:5000')

  socket.onopen = () => {
    console.log('Connected to WebSocket server')

    // Send the user ID to the server once connected
    socket.send(JSON.stringify({ userId }))
  }

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data)
    console.log('Received chat data:', data)
  }

  socket.onclose = () => {
    console.log('WebSocket connection closed')
  }

  socket.onerror = (error) => {
    console.error('WebSocket error:', error)
  }
}
