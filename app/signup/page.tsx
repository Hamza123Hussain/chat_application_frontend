'use client'
import { auth, db } from '@/utils/FirebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const SignUp = () => {
  const [inputVal, setInputVal] = useState({
    email: '',
    password: '',
    Name: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const Router = useRouter()

  const handleSubmit = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        inputVal.email,
        inputVal.password
      )
      if (userCredential) {
        await setDoc(doc(db, 'Users', userCredential.user.uid), {
          Name: inputVal.Name,
          Email: inputVal.email,
          id: userCredential.user.uid,
          Blocked: [],
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
      <h6 className=" text-xs text-center text-gray-400 mt-2">
        Already Have A Account? Click Here To{' '}
        <span onClick={() => Router.push('/Login')} className=" underline">
          Login in
        </span>
      </h6>
    </div>
  )
}

export default SignUp
