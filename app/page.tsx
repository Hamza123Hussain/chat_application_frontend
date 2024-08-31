'use client'
import React from 'react'
import { FaComments } from 'react-icons/fa'
import UserList from '@/components/Chat/UserList'
import ChatList from '@/components/Chat/ChatList'
import { useUserContext } from '@/utils/Context'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileView from '@/components/MobileView'
export default function Home() {
  const { chatID } = useUserContext()
  return (
    <div className=" bg-gray-900 min-h-screen   ">
      <div className="flex">
        <div className=" bg-gray-800 text-white hidden md:block min-h-screen w-52">
          <UserList />
        </div>
        <div className="bg-gray-900 w-full    mx-auto min-h-screen  flex flex-col gap-w  shadow-lg">
          {' '}
          <Navbar />
          <MobileView />
          {chatID ? (
            <ChatList />
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <FaComments className="text-blue-400 text-4xl mb-4" />
              <p className="text-gray-300 text-lg">No chats available</p>
              <p className="text-gray-400 text-xs">
                Start a conversation to see your messages here!
              </p>
            </div>
          )}
          <Footer />
        </div>
      </div>
    </div>
  )
}
