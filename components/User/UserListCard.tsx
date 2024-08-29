import { CHATDAT } from '@/utils/ChatDataInterface'
import Image from 'next/image'
import React from 'react'
const UserListCard = ({ User }: { User: CHATDAT }) => {
  return (
    <div key={User.user.id} className=" flex flex-col ">
      <div className=" flex items-center gap-2">
        <Image
          src={User.user.FileURL}
          width={40}
          height={20}
          alt="User"
          className=" rounded-full"
        />
        <h6>{User.user.Name}</h6>
      </div>
      <span className=" text-center text-[10px] text-gray-400">
        {User.LastMessage ? User.LastMessage : 'I am Message'}
      </span>
    </div>
  )
}

export default UserListCard
