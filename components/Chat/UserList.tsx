import React, { useEffect } from 'react'
import AddNewUser from '../User/AddNewUser'
import SearchBar from '../SearchBar'
import UserImageandName from '../User/UserImageandName'
import { connectToWebSocket } from '@/functions/CreatingChatList'
import { useUserContext } from '@/utils/Context'

const UserList = () => {
  const { userID } = useUserContext()
  useEffect(() => {
    // Function to handle creating a new chat and connecting to the WebSocket
    const initializeChat = async () => {
      // Then connect to the WebSocket to listen for updates
      connectToWebSocket(userID)
    }

    // Call the initialization function when the component mounts
    initializeChat()
  }, [userID]) // The effect will re-run if the userID changes
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
