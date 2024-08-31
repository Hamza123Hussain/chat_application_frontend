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
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-6 min-h-screen">
      <div className="w-full max-w-md p-4 bg-gray-800 rounded-lg shadow-lg">
        <SignUpTextFields inputVal={inputVal} setInputVal={setInputVal} />
        <button
          onClick={() => handleSubmit(inputVal)}
          className="mt-4 bg-green-600 px-6 py-2 rounded-lg text-white hover:bg-green-700 transition duration-300 w-full"
        >
          Sign Up
        </button>
        <h6 className="text-xs text-center text-gray-400 mt-4">
          Already Have An Account? Click Here To{' '}
          <span
            onClick={() => Router.push('/Login')}
            className="underline cursor-pointer text-green-400 hover:text-green-300"
          >
            Log In
          </span>
        </h6>
      </div>
    </div>
  )
}

export default SignUp
