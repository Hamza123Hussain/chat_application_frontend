import { MakeNewChat } from '@/functions/CreatingNewChat'
import { useUserContext } from '@/utils/Context'
import React, { useState } from 'react'

const UserFound = ({ User }: { User: any }) => {
  const { userID, Flag, setFlag } = useUserContext()
  const [NewUsers, setUsers] = useState([])
  const AddUser = async () => {
    try {
      const Data = await MakeNewChat(User.id, userID)
      setFlag(!Flag)
      console.log('DATA HERE', Data)
      // setUsers((prev: any) => prev.push(Data))
      console.log('USERS : ', NewUsers)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(`IDSSS : ${userID}&&&&&&${User.id}`)
  return (
    <div className=" flex gap-2 items-center justify-between ">
      <div className="flex gap-2 items-center">
        <img
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
