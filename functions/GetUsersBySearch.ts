import { BackendUrl } from '@/utils/SignUpInterface'
import axios from 'axios'

export const Getusers = async (name: string) => {
  try {
    const response = await axios.get(`${BackendUrl}/api/User/SearchUser`, {
      params: { name },
    })

    if (response.status === 200) {
      // console.log('DATA FROOM API', response.data)
      return response.data
    } else {
      console.log('No user found')
    }
  } catch (error) {
    console.log(`Error in API: ${error}`)
  }
}
