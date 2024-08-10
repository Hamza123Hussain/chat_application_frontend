import Image from 'next/image'
import React from 'react'
import UserDetailAccordions from '../User/UserDetailAccordions'
import UserSettings from '../User/UserSettings'

const UserDetail = () => {
  return (
    <div className=" flex flex-col gap-7 justify-around">
      {' '}
      <div className=" flex gap-2 items-center p-2 border-b-2 ">
        {' '}
        <Image
          src={'/User.png'}
          alt="USER"
          width={40}
          height={20}
          className=" rounded-full"
        />
        <h6 className=" text-xl sm:text-sm">Hamza Hussain</h6>
      </div>
      <UserSettings />
      <UserDetailAccordions Name="File" /> <UserDetailAccordions Name="Image" />{' '}
      <div className=" p-2 ">
        <button className=" bg-red-500 text-white px-4 py-2 w-full">
          Block User
        </button>
      </div>
    </div>
  )
}

export default UserDetail
