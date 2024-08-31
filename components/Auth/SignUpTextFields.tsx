import { InputValues } from '@/utils/SignUpInterface'
import React, { ChangeEvent } from 'react'

const SignUpTextFields = ({
  inputVal,
  setInputVal,
}: {
  inputVal: InputValues
  setInputVal: any
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal((prev: InputValues) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setInputVal((prev: InputValues) => ({
        ...prev,
        File: e.target.files![0],
      }))
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <label className="flex items-center gap-2">
        <input
          type="file"
          name="File"
          onChange={handleFileChange}
          className="hidden" // Hide default file input
        />
        <button className="bg-gray-700 text-white px-4 py-2 rounded-md border border-gray-600 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500">
          Choose File
        </button>
      </label>

      <input
        type="text"
        placeholder="Enter Name"
        name="Name"
        value={inputVal.Name}
        onChange={handleChange}
        className="p-2 rounded border border-gray-600 bg-gray-800 text-white placeholder-gray-400"
      />
      <input
        type="email"
        placeholder="Enter Email"
        name="email"
        value={inputVal.email}
        onChange={handleChange}
        className="p-2 rounded border border-gray-600 bg-gray-800 text-white placeholder-gray-400"
      />
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        value={inputVal.password}
        onChange={handleChange}
        className="p-2 rounded border border-gray-600 bg-gray-800 text-white placeholder-gray-400"
      />
    </div>
  )
}

export default SignUpTextFields
