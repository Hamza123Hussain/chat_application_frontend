import { useUserContext } from '@/utils/Context'
import Image from 'next/image'
import React from 'react'

export const ChatMessage = ({
  message,
  isUser,
  Pic,
}: {
  message: string
  isUser: string
  Pic: string | null
}) => {
  const { userID } = useUserContext()

  return (
    <div
      className={`flex ${
        isUser === userID ? 'justify-end' : 'justify-start'
      } my-2`}
    >
      <div
        className={`p-2 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-md ${
          isUser === userID
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-800'
        }`}
      >
        {Pic && (
          <div className="w-full mb-2">
            <Image
              src={Pic}
              width={300}
              height={200}
              alt={message}
              className="rounded-lg w-full "
              layout="responsive"
            />
          </div>
        )}
        <p className="text-sm">{message}</p>
      </div>
    </div>
  )
}
