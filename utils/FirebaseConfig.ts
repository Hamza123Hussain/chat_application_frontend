import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDvHFxR0GVxkAnNfj5-AhHbxzsXsdMIZJ4',
  authDomain: 'chat-stream-e0a42.firebaseapp.com',
  projectId: 'chat-stream-e0a42',
  storageBucket: 'chat-stream-e0a42.appspot.com',
  messagingSenderId: '490427169259',
  appId: '1:490427169259:web:d7d861e9588f0978c741ae',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Firebase services
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { auth, db, storage }
