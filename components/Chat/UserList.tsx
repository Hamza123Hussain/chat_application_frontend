import { Search } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const UserList = () => {
  const [searchterm, setsearch] = useState('')
  return (
    <div className=" p-2 flex flex-col">
      <div className=" flex gap-2 bg-gray-400 rounded-lg p-1 mb-2 items-center w-full hover:border-2  ">
        {' '}
        <input
          type="text"
          value={searchterm}
          onChange={(e: any) => setsearch(e.target.value)}
          placeholder="Search For User"
          className=" border-none placeholder:text-white text-xs outline-none rounded-lg bg-transparent w-10/12   "
        />
        <Search size={20} />
      </div>

      <div className=" flex items-center gap-3 hover:bg-gray-500 rounded-lg p-1">
        <Image
          src={'/User.png'}
          alt="USER"
          width={25}
          height={25}
          className=" rounded-full"
        />
        <h6 className=" text-[12px]">Hamza Hussain</h6>
      </div>
    </div>
  )
}

export default UserList
