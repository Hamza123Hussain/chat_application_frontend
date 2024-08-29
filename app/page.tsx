'use client'
import React, { useEffect, useRef } from 'react'
import UserList from '@/components/Chat/UserList'
export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="bg-slate-600 w-6/12 md:w-2/12">
        <UserList />
      </div>
      <div className="bg-slate-200 w-6/12 md:w-10/12">{/* <ChatList /> */}</div>
    </div>
  )
}
{
  /* <div className="bg-slate-500 w-1/12 md:w-2/12">
{/* <UserDetail /> */
}
// </div> */}
