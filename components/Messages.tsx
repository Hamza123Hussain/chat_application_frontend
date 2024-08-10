import Image from 'next/image'
import React from 'react'

export const ChatMessage = ({
  message,
  isUser,
}: {
  message: string
  isUser: any
}) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-between'} m-2 `}>
      <div
        className={` p-1 px-2 text-xs rounded-lg my-3 ${
          isUser ? 'bg-blue-500 text-white' : 'bg-gray-600 text-gray-800'
        }`}
      >
        <div className=" flex flex-col items-start gap-1 ">
          {' '}
          {message}
          <div className=" flex items-center justify-end gap-2">
            {' '}
            <Image
              src={'/User.png'}
              alt="USER"
              width={15}
              height={15}
              className=" rounded-full"
            />
            <h6 className=" text-[12px] ">Hamza Hussain</h6>
          </div>
        </div>
      </div>
    </div>
  )
}
