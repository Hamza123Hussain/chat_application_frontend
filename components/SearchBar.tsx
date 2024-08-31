import { Getusers } from '@/functions/GetUsersBySearch'
import { useUserContext } from '@/utils/Context'
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import Loader from './Loader'

const SearchBar = () => {
  const [loading, setloading] = useState(false)
  const { setusers } = useUserContext()
  const [searchterm, setsearch] = useState('')
  const GetPeople = async () => {
    try {
      setloading(true)
      const data = await Getusers(searchterm)
      if (data) {
        setusers(data)
        setloading(false)
      }
    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }
  if (loading) {
    return <Loader />
  }
  return (
    <div className=" flex gap-2 bg-gray-400 rounded-lg p-1 mb-2 items-center w-full hover:border-2  ">
      {' '}
      <input
        type="text"
        value={searchterm}
        onChange={(e: any) => setsearch(e.target.value)}
        placeholder="Search For User"
        className=" border-none placeholder:text-white text-xs outline-none rounded-lg bg-transparent w-11/12   "
      />
      <Search onClick={GetPeople} size={20} />
    </div>
  )
}

export default SearchBar
