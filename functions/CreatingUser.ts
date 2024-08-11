import { auth, db, storage } from '@/utils/FirebaseConfig'
import { InputValues } from '@/utils/SignUpInterface'
import { createUserWithEmailAndPassword, UserCredential } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { showCustomToast } from './CustomToast'
export const handleSubmit = async (inputVal: InputValues) => {
  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      auth,
      inputVal.email,
      inputVal.password
    )

    if (userCredential) {
      let fileURL = ''

      // Upload the file to Firebase Storage
      if (inputVal.File) {
        const fileRef = ref(
          storage,
          `users/${userCredential.user.uid}/${inputVal.File.name}`
        )
        await uploadBytes(fileRef, inputVal.File)
        fileURL = await getDownloadURL(fileRef)
      }

      // Save the user data to Firestore
      await setDoc(doc(db, 'Users', userCredential.user.uid), {
        Name: inputVal.Name,
        Email: inputVal.email,
        id: userCredential.user.uid,
        Blocked: [],
        FileURL: fileURL, // Store the download URL in Firestore
      })

      await setDoc(doc(db, 'Chats', userCredential.user.uid), {
        Chats: [],
      })

      showCustomToast()
    }
  } catch (error) {
    console.error('Error during registration:', error)
  }
}
