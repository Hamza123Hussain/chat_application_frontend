'use client'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CurrentUser from './User/CurrentUser'
import { useUserContext } from '@/utils/Context'
const Navbar = () => {
  const [flag, setflag] = useState(false)
  const { userID } = useUserContext()
  useEffect(() => {
    if (userID) setflag(true)
    else {
      setflag(false)
    }
  }, [userID])
  const Router = useRouter()
  const pathname = usePathname()
  return (
    <div
      className={`p-2 flex justify-between w-full ${
        pathname == '/' ? 'rounded-lg ' : ''
      } items-center bg-[#121212] shadow-lg `}
    >
      <div className="flex gap-3 items-center">
        <Image
          src={'/chat.png'}
          alt="Logo"
          width={20}
          height={40}
          className="rounded-full"
        />
        <h1 className="sm:text-lg font-semibold text-xs  text-[#E0E0E0]">
          ChatStream
        </h1>
      </div>
      <div className="flex gap-4">
        {flag ? (
          <CurrentUser />
        ) : (
          <button
            onClick={() => {
              Router.push('/Login')
            }}
            className="px-6 py-2 rounded-md bg-[#BB86FC] text-[#121212] hover:bg-[#8c2eff] text-xs sm:text-sm transition duration-300"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  )
}
export default Navbar
