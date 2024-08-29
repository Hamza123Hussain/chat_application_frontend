// utils/handleSubmit.ts
import axios from 'axios'
import { InputValues } from '@/utils/SignUpInterface'
import { showCustomToast } from './CustomToast'

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
      'http://localhost:5000/api/Auth/Register', // Replace with your actual backend URL
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensure headers are set correctly
        },
      }
    )

    if (response.status === 200) {
      showCustomToast()
    }
  } catch (error) {
    console.error('Error during registration:', error)
    showCustomToast()
  }
}
