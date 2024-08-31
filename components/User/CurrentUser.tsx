import { fetchAndHandleUserDetails } from '@/functions/GettingUserDetail'
import { Signout } from '@/functions/Signout'
import { useUserContext } from '@/utils/Context'
import Image from 'next/image'
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
      // console.log('DATA FETCHED : ', Data)
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
    <div className=" flex gap-2 items-center flex-row text-xs sm:text-sm">
      <div className=" flex gap-2 items-center">
        <Image
          src={user?.FileURL}
          width={30}
          height={50}
          alt="UserImage"
          className=" rounded-full"
        />
        <h1 className="text-[#E0E0E0]">{user?.Name}</h1>
      </div>
      <button
        className=" bg-[#BB86FC] text-[#121212] hover:bg-[#8c2eff] rounded-lg px-3 py-1 border-white "
        onClick={ByeBye}
      >
        Sign Out
      </button>
    </div>
  )
}
export default CurrentUser
