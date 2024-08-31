import React from 'react'
import { SheetContent, SheetTrigger } from './ui/sheet'
import { Sheet } from 'lucide-react'
import { GiHamburgerMenu } from 'react-icons/gi'
import UserList from './Chat/UserList'

const Trigger = () => {
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

export default Trigger
