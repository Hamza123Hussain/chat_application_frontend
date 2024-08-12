'use client'
import React, { createContext, useState, ReactNode, useContext } from 'react'

type UserContextType = {
  userID: string
  setID: React.Dispatch<React.SetStateAction<string>>
}

const UserContext = createContext<UserContextType | null>(null)

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [userID, setID] = useState<string>('')

  return (
    <UserContext.Provider value={{ userID, setID }}>
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
