import { createMessage } from '@/functions/CreateANewMessage'
import { useUserContext } from '@/utils/Context'
import { FileImage } from 'lucide-react'
import React, { useState } from 'react'
const NewMessage = () => {
  const [messageInput, setMessageInput] = useState('')
  const { chatID, userID, setMessageFlag, MessageFlag, RecieverID } =
    useUserContext()
  const CreateMessage = async () => {
    /**ezisEbOzjcS1aFzX21Tp
     * chatID, text, senderId, receiverId
     */
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
    <div className="bg-white border-t border-gray-300 flex items-center gap-2 p-2 sticky bottom-0">
      <div className="flex items-center gap-2">
        <FileImage className="text-gray-500 hover:text-gray-700 cursor-pointer" />
        {/* <FiCamer className="text-gray-500 hover:text-gray-700 cursor-pointer" />
        <FiMic className="text-gray-500 hover:text-gray-700 cursor-pointer" /> */}
      </div>
      <input
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        type="text"
        placeholder="Type a message..."
        className="flex-1 border-2 border-gray-300 rounded-lg p-2 outline-none focus:border-blue-500"
      />
      <button
        onClick={CreateMessage}
        className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-300"
      >
        Send
      </button>
    </div>
  )
}
export default NewMessage
