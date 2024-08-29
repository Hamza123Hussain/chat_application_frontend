import axios from 'axios'

// Async function to fetch and handle user details
export const fetchAndHandleUserDetails = async (UserId: string) => {
  try {
    const Response = await axios.get(
      `http://localhost:5000/api/User/GetUser?userId=${UserId}`
    )
    if (Response.status === 200) {
      return Response.data
    }
  } catch (error) {
    console.log(`ERROR IN GETTING DATA ${error}`)
  }
}
