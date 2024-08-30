'use client'
import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from 'react'
const UserContext = createContext<any>(null)
export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [Flag, setFlag] = useState(false)
  const [RecieverID, setRecieverID] = useState('')
  const [MessageFlag, setMessageFlag] = useState(false)
  const [chatID, setCHATID] = useState<string>(() => {
    // Retrieve chatID from localStorage on initialization
    const storedChatID = localStorage.getItem('chatID')
    return storedChatID || '' // Default to an empty string if no chatID is found
  })
  const [userID, setID] = useState<string>(() => {
    // Retrieve userID from localStorage on initialization
    const storedID = localStorage.getItem('userID')
    return storedID || '' // Default to an empty string if no userID is found
  })
  const [searchUsers, setusers] = useState([])

  useEffect(() => {
    if (userID) {
      localStorage.setItem('userID', userID)
    } else {
      localStorage.removeItem('userID')
    }
  }, [userID])

  useEffect(() => {
    if (chatID) {
      localStorage.setItem('chatID', chatID)
    } else {
      localStorage.removeItem('chatID')
    }
  }, [chatID])

  return (
    <UserContext.Provider
      value={{
        userID,
        setID,
        searchUsers,
        setusers,
        chatID,
        setCHATID,
        Flag,
        setFlag,
        MessageFlag,
        setMessageFlag,
        RecieverID,
        setRecieverID,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
export const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext must be used within a ContextProvider')
  }
  return context
}
