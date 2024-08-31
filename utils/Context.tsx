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
  const [chatID, setCHATID] = useState<string>()
  const [userID, setID] = useState<string>(() => {
    // Ensure that localStorage is only accessed on the client
    if (typeof window !== 'undefined') {
      const storedID = localStorage.getItem('userID')
      return storedID || '' // Default to an empty string if no userID is found
    }
    return ''
  })
  const [searchUsers, setusers] = useState([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (userID) {
        localStorage.setItem('userID', userID)
      } else {
        localStorage.removeItem('userID')
      }
    }
  }, [userID])

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
