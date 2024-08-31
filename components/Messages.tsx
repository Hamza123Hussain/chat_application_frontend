import { formatTime, timestampToDate } from '@/functions/FormatingTime'
import { useUserContext } from '@/utils/Context'
import { Message } from '@/utils/MessageInterface'
import Image from 'next/image'
import React from 'react'
export const ChatMessage = ({ messageData }: { messageData: Message }) => {
  const { userID } = useUserContext()
  // Get formatted time
  const messageTime = messageData.timestamp
    ? formatTime(timestampToDate(messageData.timestamp))
    : ''
  return (
    <div
      className={`flex ${
        messageData.senderId === userID ? 'justify-end' : 'justify-start'
      } my-2 w-full`}
    >
      <div
        className={`p-3 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-md flex flex-col ${
          messageData.senderId === userID
            ? 'bg-[#1d3c32] text-white' // Darker green for user's own messages
            : 'bg-gray-800 text-gray-200' // Dark gray for others' messages
        }`}
      >
        <div className="flex items-center gap-2 mb-2">
          {messageData.UserProfileImage && (
            <Image
              className="rounded-full"
              src={messageData.UserProfileImage}
              width={20}
              height={20}
              alt={messageData.Name}
            />
          )}
          <h6 className="text-sm font-semibold">{messageData.Name}</h6>
        </div>
        {messageData.MessageImage && (
          <div className="sm:w-full mb-2 w-48">
            <Image
              src={messageData.MessageImage}
              width={300}
              height={200}
              alt={messageData.text}
              className="rounded-lg w-full"
              layout="responsive"
            />
          </div>
        )}
        <p className="text-sm">{messageData.text}</p>
        {messageTime && (
          <span className="text-xs text-gray-400 mt-1">{messageTime}</span>
        )}
      </div>
    </div>
  )
}
