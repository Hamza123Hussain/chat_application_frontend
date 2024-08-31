import React, { useEffect, useState } from 'react'
import AddNewUser from '../User/AddNewUser'
import { useUserContext } from '@/utils/Context'
import { io } from 'socket.io-client'
import { CHATDAT } from '@/utils/ChatDataInterface'
import UserListCard from '../User/UserListCard'
import Loader from '../Loader'
const UserList: React.FC = () => {
  const { userID, Flag, MessageFlag } = useUserContext()
  const [chatData, setChatData] = useState<CHATDAT[]>([])
  const [Loading, setloading] = useState(false)
  useEffect(() => {
    setloading(true)
    const socket = io('http://localhost:5000')
    socket.emit('UserList', userID)
    socket.on('UserListReceived', (data: any) => {
      // console.log('Received data from server:', data)
      setChatData(data)
      setloading(false)
    })
    return () => {
      if (socket) {
        socket.disconnect()
      }
    }
  }, [userID, Flag, MessageFlag])
  if (Loading) return <Loader />
  return (
    <div className="p-2 flex flex-col">
      <div className="flex gap-2 items-center">
        {/* <SearchBar /> */}
        <AddNewUser />
      </div>
      <div className="mt-4">
        {chatData.map((User) => (
          <UserListCard User={User} key={User.user.id} />
        ))}
      </div>
    </div>
  )
}
export default UserList
