import { CHATDAT } from '@/utils/ChatDataInterface'
import { useUserContext } from '@/utils/Context'
import Image from 'next/image'
import React, { useState } from 'react'
const UserListCard = ({ User }: { User: CHATDAT }) => {
  const [activeindex, setindex] = useState('')
  const { setCHATID } = useUserContext()
  return (
    <div
      key={User.user.id}
      className={` flex flex-col rounded-lg text-[#fffdfc] cursor-pointer p-2 ${
        activeindex === User.user.id ? 'bg-green-900' : ''
      } `}
      onClick={() => {
        setindex(User.user.id), setCHATID(User.chatID)
      }}
    >
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
