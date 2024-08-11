'use client'
import ChatList from '@/components/Chat/ChatList'
import UserDetail from '@/components/Chat/UserDetail'
import UserList from '@/components/Chat/UserList'
import { auth } from '@/utils/FirebaseConfig'
import { User } from 'firebase/auth'
import { useEffect, useState } from 'react'

export default function Home() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  if (!user) {
    return <div>No user is logged in</div>
  }

  return (
    <div className=" flex  min-h-screen">
      <p>User ID: {user.uid}</p>
      <p>Name: {user.displayName}</p>
      <p>Email: {user.email}</p>
      <div className=" bg-slate-600 w-6/12 md:w-2/12 ">
        <UserList />
      </div>
      <div className=" bg-slate-200 w-6/12 md:w-8/12">
        <ChatList />
      </div>
      <div className=" bg-slate-500 w-1/12  md:w-2/12">
        <UserDetail />
      </div>
    </div>
  )
}
