// utils/api.ts (or wherever you store your API functions)
import { BackendUrl } from '@/utils/SignUpInterface'
import axios from 'axios'

export const MakeNewChat = async (userId: string, receiverId: string) => {
  try {
    // Sending the correct parameters as expected by the backend
    const response = await axios.post(`${BackendUrl}/api/Chats/CreateChat`, {
      userId,
      receiverId,
    })

    if (response.status === 200) {
      return true
    }
  } catch (error: any) {
    console.error('Error in API call:', error)
    if (error.response) {
      console.error('Response data:', error.response.data)
    }
  }
}
