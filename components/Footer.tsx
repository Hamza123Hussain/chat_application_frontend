import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className=" flex flex-col justify-center items-center bg-green-800 text-white shadow-lg gap-2 ">
      <div className="flex p-1 gap-1 items-center">
        <Image
          src={'/chat.png'}
          alt="Logo"
          width={20}
          height={20}
          className="rounded-full"
        />
        <h1 className="text-xs font-semibold">
          {' '}
          &copy; {new Date().getFullYear()} ChatStream. All rights reserved.
        </h1>
      </div>
    </div>
  )
}

export default Footer
