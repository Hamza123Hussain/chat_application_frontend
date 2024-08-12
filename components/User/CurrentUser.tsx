import { fetchAndHandleUserDetails } from '@/functions/GettingUserDetail'
import { Signout } from '@/functions/Signout'
import { useUserContext } from '@/utils/Context'
import React, { useEffect, useState } from 'react'

const CurrentUser = () => {
  const [user, setUser] = useState<any>()
  const { userID, setID } = useUserContext()
  useEffect(() => {
    CurrentUser()
  }, [])
  const CurrentUser = async () => {
    try {
      const Data: any = await fetchAndHandleUserDetails(userID)
      console.log('DATA FETCHED : ', Data)
      if (Data) setUser(Data)
    } catch (error) {
      console.log('Error in fetching data', error)
    }
  }
  const ByeBye = async () => {
    try {
      const Data = await Signout()
      if (Data) {
        console.log(Data)
        setID('')
      }
    } catch (error) {}
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
        onClick={ByeBye}
      >
        Sign Out
      </button>
    </div>
  )
}

export default CurrentUser
