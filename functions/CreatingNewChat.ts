import axios from 'axios'

export const MakeNewChat = async (ChatID: string, CurrentChatID: string) => {
  try {
    const Response = await axios.post('http://localhost:5000/api/Chats', {
      ChatID,
      CurrentChatID,
    })
    if (Response.status === 200) {
      return Response.data
    }
  } catch (error: any) {
    console.error('Error in API call:', error)
    if (error.response) {
      console.error('Response data:', error.response.data)
    }
  }
}
