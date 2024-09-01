import { useState, useEffect, useRef } from 'react'
import { ChatMessage } from '../Messages'
import { io } from 'socket.io-client'
import { Message } from '@/utils/MessageInterface'
import NewMessage from '../NewMessage'
import { useUserContext } from '@/utils/Context'
import { BackendUrl } from '@/utils/SignUpInterface'

export default function ChatList() {
  const { chatID, MessageFlag } = useUserContext()
  const [messages, setmessage] = useState<Message[]>([])
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  useEffect(() => {
    const socket = io('https://chat-stream-backend.vercel.app') // Use your backend URL
    socket.emit('Chat', chatID)
    socket.on('ChatData', (data) => {
      setmessage(data.messages)
    })
    return () => {
      if (socket) {
        socket.disconnect()
      }
    }
  }, [MessageFlag, chatID])

  return (
    <div className="flex flex-col justify-between h-full p-2  bg-gray-900 text-white">
      <div className=" overflow-y-auto p-1  space-y-3">
        {messages.map((msg) => (
          <ChatMessage key={msg.MessageID} messageData={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <NewMessage />
    </div>
  )
}
