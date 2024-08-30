import axios from 'axios'

// Define types for the function parameters and response
interface CreateMessagePayload {
  chatID: string
  text: string
  senderId: string
  receiverId: string
}

interface MessageResponse {
  senderId: string
  text: string
  timestamp: string
}

interface ErrorResponse {
  error: string
  details?: string
}

// Function to create a message
export const createMessage = async (
  chatID: string,
  text: string,
  senderId: string,
  receiverId: string
): Promise<MessageResponse | null> => {
  try {
    // Define the payload for the POST request
    const payload: CreateMessagePayload = {
      chatID,
      text,
      senderId,
      receiverId,
    }

    // Send a POST request to the backend API to create a message
    const response = await axios.post<MessageResponse>(
      'http://localhost:5000/api/User/NewMessage',
      payload
    )
    // Check if the response status is 200 (success)
    if (response.status === 200) {
      console.log('Message created successfully:', response.data)
      return response.data
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
