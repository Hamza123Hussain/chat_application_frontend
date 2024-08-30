import { useState, useEffect, useRef } from 'react'
import { ChatMessage } from '../Messages'
import { io } from 'socket.io-client'
import { Message } from '@/utils/MessageInterface'
import NewMessage from '../NewMessage'
import { useUserContext } from '@/utils/Context'
export default function ChatList() {
  const { chatID, MessageFlag } = useUserContext()
  console.log('CHAT ID ', chatID)
  const [messages, setmessage] = useState<Message[]>([])
  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])
  useEffect(() => {
    const socket = io('http://localhost:5000')
    socket.emit('Chat', 'ezisEbOzjcS1aFzX21Tp')
    socket.on('ChatData', (data) => {
      console.log('Received data from server:', data.messages)
      setmessage(data.messages)
    })
    return () => {
      if (socket) {
        socket.disconnect()
      }
    }
  }, [MessageFlag])
  return (
    <div className="flex flex-col justify-between h-full">
      <div
        className="flex-1 overflow-y-auto p-4 space-y-4"
        style={{ maxHeight: 'calc(100vh - 160px)' }}
      >
        {messages.map((msg) => (
          <ChatMessage key={msg.MessageID} messageData={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <NewMessage />
    </div>
  )
}
