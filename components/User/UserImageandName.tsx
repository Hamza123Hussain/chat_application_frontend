import Image from 'next/image'
import React from 'react'

const UserImageandName = () => {
  return (
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
  )
}

export default UserImageandName
