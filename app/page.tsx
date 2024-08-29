'use client'
import React from 'react'
import { FaComments } from 'react-icons/fa'
import UserList from '@/components/Chat/UserList'
import ChatList from '@/components/Chat/ChatList'
import { useUserContext } from '@/utils/Context'
export default function Home() {
  const { chatID } = useUserContext()
  return (
    <div className="flex min-h-screen">
      <div className="bg-slate-600 w-6/12 md:w-2/12">
        <UserList />
      </div>
      <div className="bg-slate-100 w-full md:w-10/12 p-4 mx-auto">
        {chatID ? (
          <ChatList />
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <FaComments className="text-blue-500 text-4xl mb-4" />
            <p className="text-gray-600 text-lg">No chats available</p>
            <p className="text-gray-500">
              Start a conversation to see your messages here!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
{
  /* <div className="bg-slate-500 w-1/12 md:w-2/12">
{/* <UserDetail /> */
}
// </div> */}
