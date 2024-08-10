'use client'
import { auth } from '@/utils/FirebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'

const Login = () => {
  const [inputVal, setInputVal] = useState({ email: '', password: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        inputVal.email,
        inputVal.password
      )
      if (userCredential) {
        alert('User registered successfully')
      }
    } catch (error) {
      console.error('Error during registration:', error)
    }
  }

  return (
    <div className="flex flex-col bg-slate-700 p-3">
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
    </div>
  )
}

export default Login
