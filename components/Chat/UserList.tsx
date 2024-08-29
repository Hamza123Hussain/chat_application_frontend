import React, { useEffect, useState, useRef } from 'react'
import AddNewUser from '../User/AddNewUser'
import SearchBar from '../SearchBar'
import { useUserContext } from '@/utils/Context'
import { io } from 'socket.io-client'
const UserList: React.FC = () => {
  const { userID, Flag } = useUserContext()
  useEffect(() => {
    const socket = io('http://localhost:5000')
    socket.emit('UserList', userID)
    socket.on('UserListReceived', (data: any) => {
      console.log('Received data from server:', data)
    })
    return () => {
      if (socket) {
        socket.disconnect()
      }
    }
  }, [userID, Flag])
  return (
    <div className="p-2 flex flex-col">
      <div className="flex gap-2 items-center">
        <SearchBar />
        <AddNewUser />
      </div>
      {/* Render the received chat data */}
      <div className="mt-4">
        {/* {chatData.map((item, index) => (
          <div
            key={index}
            onClick={() => setCHATID(item.chatID)}
            className="text-white flex gap-2 items-center hover:bg-gray-300 rounded-lg"
          >
            <img
              width={30}
              height={30}
              className="rounded-full"
              src={item.user.FileURL}
              alt={item.user.Name}
            />
            <p>{item.user.Name}</p>
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default UserList
