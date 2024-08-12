import { db } from '@/utils/FirebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

interface UserData {
  Name: string
  Email: string
  id: string
  Blocked: string[]
}

const getUserDetails = async (userId: string): Promise<UserData | null> => {
  try {
    // Reference to the user's document
    const userDocRef = doc(db, 'Users', userId)

    // Fetch the document
    const userDoc = await getDoc(userDocRef)

    if (userDoc.exists()) {
      // If the document exists, return the data with proper typing
      const userData = userDoc.data() as UserData
      console.log('User Data:', userData)
      return userData
    } else {
      // If the document does not exist
      console.log('No such user document!')
      return null
    }
  } catch (error) {
    console.error('Error fetching user details:', error)
    return null
  }
}

// Async function to fetch and handle user details
export const fetchAndHandleUserDetails = async (UserId: string) => {
  // Replace with the actual user ID
  const userData = await getUserDetails(UserId)

  return userData
}
