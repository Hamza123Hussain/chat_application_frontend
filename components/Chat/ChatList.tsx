import React, { useState } from 'react'
import UserInfo from '../User/UserInfo'
import { ChatMessage } from '../Messages'
import { Camera, Image, Mic } from 'lucide-react'
const messages = [
  { text: 'Hi there!', isUser: false },
  { text: 'Hello!', isUser: true },
  { text: 'How are you?', isUser: false },
  { text: 'I’m good, thanks!', isUser: true },
]
const ChatList = () => {
  const [messageinput, setmessageinput] = useState('')
  return (
    <div className=" flex flex-col justify-between ">
      <UserInfo />
      <div className=" flex-1">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
        ))}
      </div>
      <div className=" bg-slate-600 w-full flex justify-between items-center gap-2  p-2 ">
        <div className=" flex items-center gap-2">
          <Image /> <Camera /> <Mic />
        </div>
        <input
          value={messageinput}
          onChange={(e: any) => setmessageinput(e.target.value)}
          type="text"
          className=" border-2  outline-none bg-transparent flex-1 rounded-lg p-1  "
        />
        <button className=" bg-blue-500 rounded-lg px-5 py-2">Send</button>
      </div>
    </div>
  )
}

export default ChatList
