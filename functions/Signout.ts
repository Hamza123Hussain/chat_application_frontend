import axios from 'axios'

export const Signout = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/User/SignOut')
    if (response.status === 200) {
      // Handle successful sign-out
      console.log('Sign-out successful')
      return response.data // Assuming the backend sends back some data
    }
  } catch (error) {
    console.error('Error during sign-out:', error)
  }
}
