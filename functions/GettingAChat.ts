import axios from 'axios'

export const GetChat = async (ChatID: string) => {
  try {
    const Response = await axios.get(
      `http://localhost:5000/api/Chats/Chat?ChatID=${ChatID}`
    )
    if (Response.status === 200) {
      console.log('CHAT OF USER', Response.data)
      return Response.data
    }
  } catch (error) {}
}
