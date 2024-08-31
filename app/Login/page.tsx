'use client'

import { HandleLogin } from '@/functions/LoginUser'
import { useUserContext } from '@/utils/Context'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Login = () => {
  const { userID, setID } = useUserContext()
  const [inputVal, setInputVal] = useState({
    email: '',
    password: '',
  })
  const Router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const Login = async () => {
    try {
      const ID = await HandleLogin(inputVal)
      if (ID) {
        setID(ID)
        Router.push('/')
      }
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 p-4 min-h-screen">
      <div className="w-full max-w-sm bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-4 text-center">
          Login
        </h2>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={inputVal.email}
          onChange={handleChange}
          className="mb-4 p-3 rounded-md border w-full border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={inputVal.password}
          onChange={handleChange}
          className="mb-2 p-3 rounded-md w-full border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Forgot Password */}
        <div className="text-right mb-4">
          <span
            onClick={() => Router.push('/forgot-password')}
            className="text-sm text-gray-400 hover:text-gray-300 cursor-pointer"
          >
            Forgot Password?
          </span>
        </div>

        <button
          className="bg-green-500 px-5 py-2 rounded-md text-white hover:bg-green-600 transition duration-300 w-full"
          onClick={Login}
        >
          Login
        </button>
        <h6 className="text-xs text-gray-400 mt-4 text-center">
          Already have an account? Click here to{' '}
          <span
            onClick={() => Router.push('/signup')}
            className="underline cursor-pointer"
          >
            Sign Up
          </span>
        </h6>
      </div>
    </div>
  )
}

export default Login
