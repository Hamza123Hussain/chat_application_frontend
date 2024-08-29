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
  const [chatID, setCHATID] = useState('')
  const [userID, setID] = useState<string>(() => {
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
