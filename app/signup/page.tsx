'use client'
import SignUpTextFields from '@/components/Auth/SignUpTextFields'
import { handleSubmit } from '@/functions/CreatingUser'
import { InputValues } from '@/utils/SignUpInterface'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const SignUp: React.FC = () => {
  const [inputVal, setInputVal] = useState<InputValues>({
    email: '',
    password: '',
    Name: '',
    File: null,
  })

  const Router = useRouter()

  return (
    <div className="flex flex-col bg-slate-700 p-3 min-h-screen">
      <SignUpTextFields inputVal={inputVal} setInputVal={setInputVal} />
      <button
        onClick={() => handleSubmit(inputVal)}
        className="bg-green-300 px-5 py-1 rounded"
      >
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
