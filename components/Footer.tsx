import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#121212] text-[#E0E0E0] w-full  shadow-lg gap-2 p-1">
      <div className="flex items-center gap-2">
        <Image
          src={'/chat.png'}
          alt="Logo"
          width={20}
          height={20}
          className="rounded-full"
        />
        <h1 className="text-xs font-semibold">
          &copy; {new Date().getFullYear()} ChatStream. All rights reserved.
        </h1>
      </div>
    </div>
  )
}

export default Footer
