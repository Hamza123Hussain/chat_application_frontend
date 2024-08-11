'use client'
import { auth, db, storage } from '@/utils/FirebaseConfig'
import { createUserWithEmailAndPassword, UserCredential } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useRouter } from 'next/navigation'
import React, { useState, ChangeEvent } from 'react'

interface InputValues {
  email: string
  password: string
  Name: string
  File: File | null
}

const SignUp: React.FC = () => {
  const [inputVal, setInputVal] = useState<InputValues>({
    email: '',
    password: '',
    Name: '',
    File: null,
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setInputVal((prev) => ({ ...prev, File: e.target.files![0] }))
    }
  }

  const Router = useRouter()

  const handleSubmit = async () => {
    try {
      const userCredential: UserCredential =
        await createUserWithEmailAndPassword(
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

        alert('User registered successfully')
      }
    } catch (error) {
      console.error('Error during registration:', error)
    }
  }

  return (
    <div className="flex flex-col bg-slate-700 p-3 min-h-screen">
      <input
        type="file"
        name="File"
        onChange={handleFileChange}
        className="mb-2 p-2 rounded"
      />

      <input
        type="text"
        placeholder="Enter Name"
        name="Name"
        value={inputVal.Name}
        onChange={handleChange}
        className="mb-2 p-2 rounded"
      />
      <input
        type="email"
        placeholder="Enter Email"
        name="email"
        value={inputVal.email}
        onChange={handleChange}
        className="mb-2 p-2 rounded"
      />
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        value={inputVal.password}
        onChange={handleChange}
        className="mb-2 p-2 rounded"
      />
      <button onClick={handleSubmit} className="bg-green-300 px-5 py-1 rounded">
        Sign Up
      </button>
      <h6 className="text-xs text-center text-gray-400 mt-2">
        Already Have An Account? Click Here To{' '}
        <span
          onClick={() => Router.push('/Login')}
          className="underline cursor-pointer"
        >
          Log In
        </span>
      </h6>
    </div>
  )
}

export default SignUp
