'use client'
import { auth } from '@/utils/FirebaseConfig'
import { User } from 'firebase/auth'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CurrentUser from './User/CurrentUser'

const Navbar = () => {
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
  const Router = useRouter()
  return (
    <div className="p-2 flex justify-between items-center bg-green-300 shadow-lg ">
      <div className="flex gap-3 items-center">
        <Image
          src={'/chat.png'}
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <h1 className="text-lg font-semibold text-white">ChatStream</h1>
      </div>
      <div className="flex gap-4">
        {user ? (
          <CurrentUser User={user} />
        ) : (
          <button
            onClick={() => {
              Router.push('/Login')
            }}
            className="px-6 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition duration-300"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar
