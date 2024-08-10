import Image from 'next/image'
import React from 'react'
import UserDetailAccordions from '../User/UserDetailAccordions'
import UserSettings from '../User/UserSettings'
import UserImageandName from '../User/UserImageandName'

const UserDetail = () => {
  return (
    <div className=" flex flex-col gap-3 justify-around">
      {' '}
      <div className=" p-2 border-b-2">
        <UserImageandName />
      </div>
      <UserSettings />
      <UserDetailAccordions Name="File" /> <UserDetailAccordions Name="Image" />{' '}
      <div className=" p-2 ">
        <button className=" bg-red-500 text-white px-4 py-2 w-full rounded-lg">
          Block User
        </button>
      </div>
    </div>
  )
}

export default UserDetail
