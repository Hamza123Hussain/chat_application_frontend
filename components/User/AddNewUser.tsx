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
import { useUserContext } from '@/utils/Context'
import UserFound from './UserFound'

const AddNewUser = () => {
  const { searchUsers } = useUserContext()
  return (
    <div className="bg-transparent">
      <Dialog>
        <DialogTrigger>
          <div className="flex items-center gap-1">
            <span className="text-[#e0e0e0]">Add A New User</span>
            <SquarePlus size={20} className="text-[#BB86FC]" />
          </div>
        </DialogTrigger>
        <DialogContent className="bg-gray-900 text-white">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>
              <div className="flex flex-col">
                <SearchBar />
                <div className="flex flex-col mt-4">
                  {searchUsers.map((element: any, index: number) => (
                    <UserFound User={element} key={index} />
                  ))}
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
