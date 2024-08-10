import Image from 'next/image'
import React from 'react'

const UserList = () => {
  return (
    <div className=" p-2 flex flex-col">
      <div className=" flex items-center gap-3 hover:bg-gray-500 rounded-lg p-1">
        <Image
          src={'/User.png'}
          alt="USER"
          width={25}
          height={25}
          className=" rounded-full"
        />
        <h6 className=" text-[10px] sm:text-sm">Hamza Hussain</h6>
      </div>
    </div>
  )
}

export default UserList
