'use client'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { usePathname } from 'next/navigation'
import Login from '@/app/Login/page'
import { useUserContext } from '@/utils/Context'
import Navbar from '../Navbar'
import Footer from '../Footer'
import LandingPage from '../LandingPage'
const ConditionalLayout = ({ children }: { children: ReactNode }) => {
  const { userID } = useUserContext()
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()
  // Use useEffect to only set isClient on the client-side
  useEffect(() => {
    setIsClient(true)
  }, [])
  // Check if the current route is login or signup
  const isAuthPage =
    pathname === '/Login' ||
    pathname === '/signup' ||
    pathname === '/forgot-password'
  // Render the layout based on client-side state
  if (!isClient) {
    return null // or a loading spinner if preferred
  }
  return (
    <>
      {isAuthPage || userID ? (
        <>
          {isAuthPage ? (
            <>
              <Navbar />
              {children}
              <Footer />
            </>
          ) : (
            <>{children}</>
          )}
          <Toaster />
        </>
      ) : (
        <div className=" flex flex-col">
          {' '}
          <LandingPage />{' '}
        </div>
      )}
    </>
  )
}
export default ConditionalLayout
