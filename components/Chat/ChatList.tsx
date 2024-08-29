import { useState, useEffect, useRef } from 'react'
import { FiImage, FiCamera, FiMic } from 'react-icons/fi'
import { ChatMessage } from '../Messages'
import { io } from 'socket.io-client'
import { useUserContext } from '@/utils/Context'
export default function ChatList() {
  const [messages, setmessage] = useState([])
  const [messageInput, setMessageInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])
  useEffect(() => {
    const socket = io('http://localhost:5000')
    socket.emit('Chat', 'ezisEbOzjcS1aFzX21Tp')
    socket.on('ChatData', (data) => {
      console.log('Received data from server:', data)
    })
    return () => {
      if (socket) {
        socket.disconnect()
      }
    }
  }, [])
  return (
    <div className="flex flex-col justify-between h-full">
      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto p-4 space-y-4"
        style={{ maxHeight: 'calc(100vh - 160px)' }}
      >
        {/* {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
        ))} */}
        <div ref={messagesEndRef} />
      </div>
      {/* Input Field */}
      <div className="bg-white border-t border-gray-300 flex items-center gap-2 p-2 sticky bottom-0">
        <div className="flex items-center gap-2">
          <FiImage className="text-gray-500 hover:text-gray-700 cursor-pointer" />
          <FiCamera className="text-gray-500 hover:text-gray-700 cursor-pointer" />
          <FiMic className="text-gray-500 hover:text-gray-700 cursor-pointer" />
        </div>
        <input
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          type="text"
          placeholder="Type a message..."
          className="flex-1 border-2 border-gray-300 rounded-lg p-2 outline-none focus:border-blue-500"
        />
        <button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-300">
          Send
        </button>
      </div>
    </div>
  )
}
