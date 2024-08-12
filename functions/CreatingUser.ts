import { InputValues } from '@/utils/SignUpInterface'
import { showCustomToast } from './CustomToast'
import axios from 'axios'
export const handleSubmit = async (inputVal: InputValues) => {
  try {
    const Response = await axios.post(
      'http://localhost:5000/api/User/Register',
      {
        inputVal,
      }
    )
    if (Response.status == 200) {
      showCustomToast()
    }
  } catch (error) {
    console.error('Error during registration:', error)
  }
}
