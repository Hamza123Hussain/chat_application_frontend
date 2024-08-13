import React, { useEffect, useState, useRef } from 'react'
import AddNewUser from '../User/AddNewUser'
import SearchBar from '../SearchBar'
import UserImageandName from '../User/UserImageandName'
import { connectToWebSocket } from '@/functions/CreatingChatList'
import { useUserContext } from '@/utils/Context'

const UserList = () => {
  const { userID, chatData, setChatData } = useUserContext()

  const socketRef = useRef<WebSocket | null>(null)

  useEffect(() => {
    // Function to handle creating a new chat and connecting to the WebSocket
    const initializeChat = async () => {
      if (userID) {
        // Close the existing WebSocket connection if it exists
        if (socketRef.current) {
          socketRef.current.close()
        }

        // Create a new WebSocket connection and store it in the ref
        const newSocket = connectToWebSocket(userID, (data: any) => {
          setChatData((prevData: any) => [...prevData, data]) // Update state with new data
        })

        socketRef.current = newSocket
      } else {
        console.log('USER NOT LOGGED IN')
      }
    }

    initializeChat()

    // Cleanup function to close the WebSocket connection when the component unmounts or userID changes
    return () => {
      if (socketRef.current) {
        socketRef.current.close()
      }
    }
  }, [userID]) // The effect will re-run if the userID changes

  console.log('CHATS', chatData)
  return (
    <div className="p-2 flex flex-col">
      <div className="flex gap-2 items-center">
        <SearchBar />
        <AddNewUser />
      </div>

      {/* Render the received chat data */}
      <div className="mt-4">
        {chatData.map((item: any, index: number) => (
          <div key={index} className=" text-white flex gap-2 items-center">
            <img
              width={30}
              height={30}
              className=" rounded-full"
              src={item?.chatData[0].user?.FileURL}
              alt={item?.chatData[0].user?.Name}
            />
            <p>{item?.chatData[0].user?.Name}</p>{' '}
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserList
