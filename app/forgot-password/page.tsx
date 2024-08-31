'use client'
import { ResetPass } from '@/functions/ResetPass'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
const ResetPassword = () => {
  const [email, setemail] = useState('')
  const Router = useRouter()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setemail(e.target.value)
  }
  const HandleReset = async () => {
    const Data = await ResetPass(email)
    if (Data) {
      toast.success('Email Sent To Reset Password')
      Router.push('/Login')
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#121212]">
      <div className="flex flex-col bg-[#1e1e1e] p-6 rounded-lg shadow-lg mx-auto w-full max-w-md">
        <h2 className="text-3xl font-semibold text-white mb-6 text-center">
          Reset Password
        </h2>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={handleChange}
          className="mb-4 p-3 w-full rounded-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={HandleReset}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-md transition-all w-full"
        >
          Reset Password
        </button>
      </div>
    </div>
  )
}

export default ResetPassword
