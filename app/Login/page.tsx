'use client'
import { HandleLogin } from '@/functions/LoginUser'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Login = () => {
  const [inputVal, setInputVal] = useState({
    email: '',
    password: '',
  })
  const Router = useRouter()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="flex flex-col bg-slate-700 p-3  min-h-screen">
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
      <button
        onClick={() => HandleLogin(inputVal, Router)}
        className="bg-green-300 px-5 py-1 rounded "
      >
        Login In
      </button>
      <h6 className=" text-xs  mt-2 text-gray-400 text-center">
        Already Have A Account? Click Here To{' '}
        <span onClick={() => Router.push('/signup')} className=" underline">
          Sign Up
        </span>
      </h6>
    </div>
  )
}

export default Login
