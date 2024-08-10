import { Info, Phone, Video } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const UserInfo = () => {
  return (
    <div className=" flex justify-between bg-transparent text-black border-b-2 shadow-sm shadow-black border-black p-2">
      <div className=" flex gap-2 items-center ">
        {' '}
        <Image
          src={'/User.png'}
          alt="USER"
          width={25}
          height={25}
          className=" rounded-full"
        />
        <h6 className=" text-[10px] sm:text-sm">Hamza Hussain</h6>
      </div>
      <div className=" flex gap-5 items-center cursor-pointer">
        <Phone size={20} />
        <Video size={20} />
        <Info size={20} />
      </div>
    </div>
  )
}

export default UserInfo
