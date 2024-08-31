import { createMessage } from '@/functions/CreateANewMessage'
import { useUserContext } from '@/utils/Context'
import React, { useState } from 'react'
import AddImageInMessage from './User/AddImageInMessage'
const NewMessage = () => {
  const [messageInput, setMessageInput] = useState('')
  const { chatID, userID, setMessageFlag, MessageFlag, RecieverID } =
    useUserContext()
  const CreateMessage = async () => {
    try {
      const Data = await createMessage(chatID, messageInput, userID, RecieverID)
      if (Data) {
        console.log('API HAS RESPONDED : ', Data)
        setMessageInput('')
        setMessageFlag(!MessageFlag)
      }
    } catch (error) {
      console.log('ERROR ON THE RESPONSE :  ', error)
    }
  }
  return (
    <div className="bg-[#1e1e1e] border-t border-[#333] flex items-center gap-4 p-2 rounded-lg  sticky bottom-0">
      <div className="flex items-center gap-2">
        <AddImageInMessage />
      </div>
      <input
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        type="text"
        placeholder="Type a message..."
        className="flex-1 border-2 border-gray-300 rounded-lg w-20 p-2 outline-none f bg-[#121212] text-white focus:border-[#BB86FC]"
      />
      <button
        onClick={CreateMessage}
        className="px-4 py-2 bg-[#BB86FC] text-white rounded-lg  hover:bg-[#8c2eff] transition duration-30"
      >
        Send
      </button>
    </div>
  )
}
export default NewMessage
