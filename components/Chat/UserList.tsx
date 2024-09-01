import React, { useEffect, useState } from 'react'
import AddNewUser from '../User/AddNewUser'
import { useUserContext } from '@/utils/Context'
import { io } from 'socket.io-client'
import { CHATDAT } from '@/utils/ChatDataInterface'
import UserListCard from '../User/UserListCard'
import Loader from '../Loader'
import { BackendUrl } from '@/utils/SignUpInterface'

const UserList: React.FC = () => {
  const { userID, Flag, MessageFlag } = useUserContext()
  const [chatData, setChatData] = useState<CHATDAT[]>([])
  const [Loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)
    const socket = io(`${BackendUrl}`)
    socket.emit('UserList', userID)
    socket.on('UserListReceived', (data: any) => {
      setChatData(data)
      setloading(false)
    })
    return () => {
      if (socket) {
        socket.disconnect()
      }
    }
  }, [userID, Flag, MessageFlag])

  return (
    <div className="fixed top-0 min-h-screen sm:border-r border-slate-800 bg-gray-900 p-2 gap-2 flex flex-col">
      <AddNewUser />
      {/* Scrollable container with fixed height */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-800 relative">
        {Loading ? (
          <div className="flex items-center justify-center h-full">
            <Loader />
          </div>
        ) : (
          chatData.map((User) => (
            <UserListCard User={User} key={User.user.id} />
          ))
        )}
      </div>
    </div>
  )
}

export default UserList
