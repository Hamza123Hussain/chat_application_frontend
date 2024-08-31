import { BackendUrl } from '@/utils/SignUpInterface'
import axios from 'axios'

export const GetChat = async (ChatID: string) => {
  try {
    const Response = await axios.get(
      `${BackendUrl}/api/Chats/GetChatOnce?ChatID=${ChatID}`
    )
    if (Response.status === 200) {
      console.log('CHAT OF USER', Response.data)
      return Response.data
    }
  } catch (error) {}
}
