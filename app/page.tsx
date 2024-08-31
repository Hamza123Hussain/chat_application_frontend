'use client'
import React from 'react'
import { FaComments } from 'react-icons/fa'
import UserList from '@/components/Chat/UserList'
import ChatList from '@/components/Chat/ChatList'
import { useUserContext } from '@/utils/Context'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Home() {
  const { chatID } = useUserContext()
  return (
    <div className=" bg-gray-900 min-h-screen pt-3  ">
      <Sheet>
        <SheetTrigger>
          {' '}
          <div className=" border-white rounded-lg p-1 w-4">
            <GiHamburgerMenu className="text-white" />
          </div>{' '}
        </SheetTrigger>
        <SheetContent side={'left'} className=" bg-gray-900">
          <UserList />
        </SheetContent>
      </Sheet>
      <div className="flex">
        {/* <div className=" bg-gray-800 text-white w-4/12 md:w-2/12">
        <UserList />
      </div> */}
        <div className="bg-gray-900 w-full md:w-10/12 p-4 mx-auto  shadow-lg">
          {chatID ? (
            <ChatList />
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <FaComments className="text-blue-400 text-4xl mb-4" />
              <p className="text-gray-300 text-lg">No chats available</p>
              <p className="text-gray-400">
                Start a conversation to see your messages here!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
{
  /* <div className="bg-slate-500 w-1/12 md:w-2/12">
{/* <UserDetail /> */
}
// </div> */}
