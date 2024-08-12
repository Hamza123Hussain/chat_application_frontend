import axios from 'axios'

export const Getusers = async (name: string) => {
  try {
    const response = await axios.post('http://localhost:5000/api/Search/', {
      name,
    })

    if (response.status === 200) {
      console.log('DATA FROOM API', response.data)
      return response.data
    } else {
      console.log('No user found')
    }
  } catch (error) {
    console.log(`Error in API: ${error}`)
  }
}
