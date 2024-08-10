import React from 'react'
import AddNewUser from '../User/AddNewUser'
import SearchBar from '../SearchBar'
import UserImageandName from '../User/UserImageandName'

const UserList = () => {
  return (
    <div className=" p-2 flex flex-col">
      <div className=" flex gap-2 items-center ">
        <SearchBar />
        <AddNewUser />
      </div>

      <UserImageandName />
    </div>
  )
}

export default UserList
