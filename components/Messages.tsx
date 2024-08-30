import { useUserContext } from '@/utils/Context'
import { Message } from '@/utils/MessageInterface'
import Image from 'next/image'
import React from 'react'
export const ChatMessage = ({ messageData }: { messageData: Message }) => {
  const { userID } = useUserContext()
  return (
    <div
      className={`${
        messageData.senderId === userID ? 'justify-end' : 'justify-start'
      } my-2`}
    >
      <div
        className={`p-2  max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-md flex flex-col ${
          messageData.senderId === userID
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-800'
        }`}
      >
        <div className=" pl-2 mb-3 flex items-center gap-2">
          {messageData.UserProfileImage && (
            <Image
              className=" rounded-full"
              src={messageData.UserProfileImage}
              width={20}
              height={20}
              alt={messageData.Name}
            />
          )}
          <h6>{messageData.Name}</h6>
        </div>
        {messageData.MessageImage && (
          <div className="w-full mb-2">
            <Image
              src={messageData.MessageImage}
              width={300}
              height={200}
              alt={messageData.text}
              className="rounded-lg w-full "
              layout="responsive"
            />
          </div>
        )}
        <p className="text-sm pl-3">{messageData.text}</p>
      </div>
    </div>
  )
}
