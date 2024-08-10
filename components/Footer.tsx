import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="p-1 flex flex-col justify-center items-center bg-green-800 text-white shadow-lg gap-2 ">
      <div className="flex gap-1 items-center">
        <Image
          src={'/chat.png'}
          alt="Logo"
          width={20}
          height={20}
          className="rounded-full"
        />
        <h1 className="text-xs font-semibold">ChatStream</h1>
      </div>
      <div className="text-xs">
        &copy; {new Date().getFullYear()} ChatStream. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
