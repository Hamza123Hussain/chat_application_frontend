import { fetchAndHandleUserDetails } from '@/functions/GettingUserDetail'
import { auth } from '@/utils/FirebaseConfig'
import { signOut, User } from 'firebase/auth'
import React, { useEffect, useState } from 'react'

const CurrentUser = ({ User }: { User: User }) => {
  const [user, setUser] = useState<any>()
  useEffect(() => {
    CurrentUser()
  }, [])
  const CurrentUser = async () => {
    try {
      const Data: any = await fetchAndHandleUserDetails(User.uid)
      console.log('DATA FETCHED : ', Data)
      if (Data) setUser(Data)
    } catch (error) {
      console.log('Error in fetching data', error)
    }
  }
  return (
    <div className=" flex gap-2 items-center">
      <img
        src={user?.FileURL}
        width={30}
        height={50}
        alt="UserImage"
        className=" rounded-full"
      />
      <h1>{user?.Name}</h1>
      <button
        className=" bg-green-900 rounded-lg px-3 py-1 border-white text-white"
        onClick={() => signOut(auth)}
      >
        Sign Out
      </button>
    </div>
  )
}

export default CurrentUser
