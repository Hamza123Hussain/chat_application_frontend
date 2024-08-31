import { CHATDAT } from '@/utils/ChatDataInterface'
import { useUserContext } from '@/utils/Context'
import Image from 'next/image'
import React, { useState } from 'react'

const UserListCard = ({ User }: { User: CHATDAT }) => {
  const [activeindex, setindex] = useState('')
  const { setCHATID, setRecieverID } = useUserContext()
  return (
    <div
      key={User.user.id}
      className={`flex flex-col rounded-lg text-gray-200 cursor-pointer p-2 ${
        activeindex === User.user.id ? 'bg-gray-700' : 'bg-gray-800'
      }`}
      onClick={() => {
        setindex(User.user.id),
          setCHATID(User.chatID),
          setRecieverID(User.user.id)
      }}
    >
      <div className="flex items-center gap-2">
        <Image
          src={User.user.FileURL}
          width={40}
          height={40}
          alt="User"
          className="rounded-full"
        />
        <h6 className=" text-xs sm:text-lg">{User.user.Name}</h6>
      </div>
      <span className="text-center text-sm text-gray-400">
        {User.LastMessage ? User.LastMessage : 'No recent messages'}
      </span>
    </div>
  )
}

export default UserListCard
