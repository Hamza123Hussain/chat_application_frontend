'use client'
import ChatList from '@/components/Chat/ChatList'
import UserDetail from '@/components/Chat/UserDetail'
import UserList from '@/components/Chat/UserList'

export default function Home() {
  return (
    <div className=" flex  min-h-screen">
      <div className=" bg-slate-600 w-6/12 md:w-2/12 ">
        <UserList />
      </div>
      <div className=" bg-slate-200 w-6/12 md:w-8/12">
        <ChatList />
      </div>
      <div className=" bg-slate-900 w-1/3 hidden md:w-2/12">
        <UserDetail />
      </div>
    </div>
  )
}
