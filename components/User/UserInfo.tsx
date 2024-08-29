import { Info, Phone, Video } from 'lucide-react'
import React from 'react'
import UserImageandName from './UserImageandName'
const UserInfo = () => {
  return (
    <div className=" flex justify-between bg-transparent text-black border-b-2 shadow-sm shadow-black border-black p-2">
      <UserImageandName />
      <div className=" flex gap-5 items-center cursor-pointer">
        <Phone size={20} />
        <Video size={20} />
        <Info size={20} />
      </div>
    </div>
  )
}
export default UserInfo
