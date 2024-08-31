import { BackendUrl } from '@/utils/SignUpInterface'
import axios from 'axios'

export const ResetPass = async (email: string) => {
  const Response = await axios.post(`${BackendUrl}/api/Auth/Reset`, {
    email,
  })
  try {
    if (Response.status === 200) {
      return Response.data
    }
  } catch (error) {
    console.log('ERROR IN FUNCTION : ', error)
  }
}
