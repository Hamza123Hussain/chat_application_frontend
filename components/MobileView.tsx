import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

import { GiHamburgerMenu } from 'react-icons/gi'
import UserList from './Chat/UserList'

const MobileView = () => {
  return (
    <div className=" md:hidden px-1 py-1 mt-1">
      <Sheet>
        <SheetTrigger>
          {' '}
          <div className="  md:hidden   p-1 ">
            <GiHamburgerMenu className="text-white" />
          </div>{' '}
        </SheetTrigger>
        <SheetContent side={'left'} className="  w-52 bg-gray-900">
          <UserList />
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileView
