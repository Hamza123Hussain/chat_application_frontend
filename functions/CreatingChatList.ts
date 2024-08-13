// functions/CreatingChatList.ts

export const connectToWebSocket = (
  userId: string,
  onDataReceived: (data: any) => void
): WebSocket => {
  const socket = new WebSocket('ws://localhost:5000')

  socket.onopen = () => {
    console.log('Connected to WebSocket server')
    socket.send(JSON.stringify({ userId }))
  }

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data)
    console.log('Received chat data:', data)
    onDataReceived(data)
  }

  socket.onclose = () => {
    console.log('WebSocket connection closed')
  }

  socket.onerror = (error) => {
    console.error('WebSocket error:', error)
  }

  return socket
}
