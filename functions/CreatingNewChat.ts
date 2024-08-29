// utils/api.ts (or wherever you store your API functions)
import axios from 'axios'

export const MakeNewChat = async (userId: string, receiverId: string) => {
  try {
    // Sending the correct parameters as expected by the backend
    const response = await axios.post(
      'http://localhost:5000/api/Chats/CreateChat',
      {
        userId,
        receiverId,
      }
    )

    if (response.status === 200) {
      return response.data
    }
  } catch (error: any) {
    console.error('Error in API call:', error)
    if (error.response) {
      console.error('Response data:', error.response.data)
    }
  }
}
