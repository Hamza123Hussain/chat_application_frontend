import { useUserContext } from '@/utils/Context'
import Image from 'next/image'
import React from 'react'

export const ChatMessage = ({
  message,
  isUser,
}: {
  message: string
  isUser: string
}) => {
  const { userID } = useUserContext()
  return (
    <div
      className={`flex ${
        isUser == userID ? 'justify-end' : 'justify-start'
      } my-2`}
    >
      <div
        className={`p-3 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-md ${
          isUser === userID
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-800'
        }`}
      >
        <p className="text-sm">{message}</p>
        <div className="flex items-center mt-2 text-xs text-gray-600">
          <Image
            src="/User.png"
            alt="User"
            width={20}
            height={20}
            className="rounded-full mr-2"
          />
          <span>Hamza Hussain</span>
        </div>
      </div>
    </div>
  )
}
