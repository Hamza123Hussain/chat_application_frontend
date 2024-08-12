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
                <div className=" flex flex-col">
                  {searchUsers.length > 0
                    ? searchUsers?.map((element: any, index: number) => {
                        return (
                          <div key={index}>
                            <UserFound User={element} />
                          </div>
                        )
                      })
                    : ''}
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
