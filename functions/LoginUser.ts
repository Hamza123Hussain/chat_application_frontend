import { BackendUrl } from '@/utils/SignUpInterface'
import axios from 'axios'
export const HandleLogin = async (inputVal: any) => {
  try {
    const Response = await axios.post(`${BackendUrl}/api/Auth/Login`, {
      inputVal,
    })
    if (Response.status === 200) {
      console.log(`log in : ${Response.data}`)

      return Response.data
    }
  } catch (error) {
    console.log('ERROR IN API ', error)
  }
}
