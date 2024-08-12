import React from 'react'

const UserFound = ({ User }: { User: any }) => {
  return (
    <div className=" flex gap-2 items-center justify-between ">
      <div className="flex gap-2 items-center">
        <img
          src={User.FileURL}
          alt="USER"
          width={25}
          height={25}
          className=" rounded-full"
        />
        <h6 className=" text-[10px] sm:text-sm">{User.Name}</h6>
      </div>
      <button className=" bg-green-500 px-5 py-2 rounded-lg text-white">
        Add User
      </button>
    </div>
  )
}

export default UserFound
