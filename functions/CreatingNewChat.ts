import axios from 'axios'

export const MakeNewChat = async (UserID: string, CurrentUserID: string) => {
  try {
    const Response = await axios.post('http://localhost:5000/api/Chats', {
      UserID,
      CurrentUserID,
    })
    if (Response.status == 200) {
      console.log(Response.data)
    }
  } catch (error) {
    console.log('error in api', error)
  }
}
