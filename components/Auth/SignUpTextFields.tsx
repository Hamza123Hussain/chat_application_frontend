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
    <>
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
    </>
  )
}

export default SignUpTextFields
