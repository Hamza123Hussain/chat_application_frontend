import { InputValues } from '@/utils/SignUpInterface'
import { showCustomToast } from './CustomToast'
import axios from 'axios'

export const handleSubmit = async (inputVal: InputValues) => {
  try {
    // Create a FormData object
    const formData = new FormData()

    // Append the file if it exists
    if (inputVal.File) {
      formData.append('File', inputVal.File)
    }

    // Append other input values
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
