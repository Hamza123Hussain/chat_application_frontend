import { auth } from '@/utils/FirebaseConfig'
import { UserCredential } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth/web-extension'

export const HandleLogin = async (inputVal: any, Router: any) => {
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(
      auth,
      inputVal.email,
      inputVal.password
    )
    if (userCredential) {
      Router.push('/')
    }
  } catch (error) {}
}
