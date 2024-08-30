import axios from 'axios'
interface ErrorResponse {
  error: string
  details?: string
}
export const createMessage = async (
  chatID: string,
  text: string,
  senderId: string,
  receiverId: string,
  image?: File | null // Optional image parameter
) => {
  try {
    // Create FormData to handle both text and optional image
    const formData = new FormData()
    formData.append('chatID', chatID)
    formData.append('text', text)
    formData.append('senderId', senderId)
    formData.append('receiverId', receiverId)
    if (image) {
      formData.append('File', image) // Append image if provided
    }
    // Send a POST request to the backend API to create a message
    const response = await axios.post(
      'http://localhost:5000/api/User/NewMessage',
      formData
    )
    // Check if the response status is 200 (success)
    if (response.status === 200) {
      console.log('Message created successfully:', response.data)
      return true
    } else {
      console.error('Failed to create message:', response.data)
      return null
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorResponse: ErrorResponse = error.response.data
      console.error('Error creating message:', errorResponse)
    } else {
      console.error('Error creating message:', error)
    }
    return null
  }
}
