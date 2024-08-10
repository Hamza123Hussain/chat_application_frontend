import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { SquarePlus } from 'lucide-react'
import SearchBar from '../SearchBar'
import Image from 'next/image'

const AddNewUser = () => {
  return (
    <div className=" bg-transparent">
      <Dialog>
        <DialogTrigger>
          {' '}
          <SquarePlus size={20} className="" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>
              <div className=" flex flex-col">
                <SearchBar />
                <div className=" flex gap-2 items-center justify-between ">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={'/User.png'}
                      alt="USER"
                      width={25}
                      height={25}
                      className=" rounded-full"
                    />
                    <h6 className=" text-[10px] sm:text-sm">Hamza Hussain</h6>
                  </div>
                  <button className=" bg-green-500 px-5 py-2 rounded-lg text-white">
                    Add User
                  </button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddNewUser
