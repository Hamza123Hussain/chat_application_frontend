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
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex gap-2 items-center justify-between bg-gray-800 p-2 rounded-lg">
      <div className="flex gap-2 items-center">
        <Image
          src={User.FileURL}
          alt="USER"
          width={30}
          height={30}
          className="rounded-full"
        />
        <h6 className="text-white text-sm">{User.Name}</h6>
      </div>
      <button
        onClick={AddUser}
        className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600 transition duration-300"
      >
        Add User
      </button>
    </div>
  )
}

export default UserFound
