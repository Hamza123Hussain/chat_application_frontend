import { MakeNewChat } from '@/functions/CreatingNewChat'
import { useUserContext } from '@/utils/Context'
import Image from 'next/image'
import React from 'react'
const UserFound = ({ User }: { User: any }) => {
  const { userID, Flag, setFlag } = useUserContext()
  const AddUser = async () => {
    try {
      const Data = await MakeNewChat(User.id, userID)
      setFlag(!Flag)
      // console.log('DATA HERE', Data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className=" flex gap-2 items-center justify-between ">
      <div className="flex gap-2 items-center">
        <Image
          src={User.FileURL}
          alt="USER"
          width={25}
          height={25}
          className=" rounded-full"
        />
        <h6 className=" text-[10px] sm:text-sm">{User.Name}</h6>
      </div>
      <button
        onClick={AddUser}
        className=" bg-green-500 px-5 py-2 rounded-lg text-white"
      >
        Add User
      </button>
    </div>
  )
}
export default UserFound
