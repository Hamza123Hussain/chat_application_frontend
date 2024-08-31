import React, { useState } from 'react'
import { FileImage } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useUserContext } from '@/utils/Context'
import { createMessage } from '@/functions/CreateANewMessage'

const AddImageInMessage = () => {
  const { chatID, userID, setMessageFlag, MessageFlag, RecieverID } =
    useUserContext()
  const [file, setFile] = useState<File | null>(null)
  const [description, setDescription] = useState<string>('')
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(event.target.files[0])
  }

  const handleSave = async () => {
    try {
      const Data = await createMessage(
        chatID,
        description,
        userID,
        RecieverID,
        file
      )
      if (Data) {
        setDescription('')
        setMessageFlag(!MessageFlag)
      }
    } catch (error) {
      console.log('ERROR ON THE RESPONSE :  ', error)
    }
    setIsDialogOpen(false)
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <FileImage
          className="text-gray-400 hover:text-gray-300 cursor-pointer"
          onClick={() => setIsDialogOpen(true)}
        />
      </DialogTrigger>
      <DialogContent className="bg-gray-800 text-white">
        <DialogHeader>
          <DialogTitle>Upload an Image</DialogTitle>
          <DialogDescription>
            Please select an image to upload and add a description.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 mt-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-600 cursor-pointer"
          />
          <input
            type="text"
            placeholder="Add a description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-600 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white"
          />
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AddImageInMessage
