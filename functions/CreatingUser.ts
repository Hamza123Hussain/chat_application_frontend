import { InputValues } from '@/utils/SignUpInterface'
import { showCustomToast } from './CustomToast'
import axios from 'axios'

export const handleSubmit = async (inputVal: InputValues) => {
  try {
    const formData = new FormData()
    if (inputVal.File) {
      formData.append('File', inputVal.File)
    }
    formData.append('email', inputVal.email)
    formData.append('password', inputVal.password)
    formData.append('Name', inputVal.Name)

    const response = await axios.post(
      'http://localhost:5000/api/User/Register',
      formData
    )
    if (response.status === 200) {
      showCustomToast()
    }
  } catch (error) {
    console.error('Error during registration:', error)
  }
}
