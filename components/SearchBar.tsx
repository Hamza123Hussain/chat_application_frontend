import { Getusers } from '@/functions/GetUsersBySearch'
import { useUserContext } from '@/utils/Context'
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import Loader from './Loader'
const SearchBar = () => {
  const [loading, setloading] = useState(false)
  const { setusers, userID } = useUserContext()
  const [searchterm, setsearch] = useState('')
  const GetPeople = async () => {
    try {
      setloading(true)
      const data = await Getusers(searchterm)
      if (data) {
        // Filter out the user with the matching userID
        const filteredData = data.filter((user: any) => user.id !== userID)
        setusers(filteredData)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setloading(false)
    }
  }
  if (loading) {
    return <Loader />
  }
  return (
    <div className="flex gap-2 bg-gray-800 rounded-lg p-2 mb-2 items-center w-full hover:border-2 hover:border-green-500 transition-colors duration-300">
      <input
        type="text"
        value={searchterm}
        onChange={(e: any) => setsearch(e.target.value)}
        placeholder="Search For User"
        className="border-none placeholder:text-gray-400 text-white text-xs outline-none rounded-lg bg-transparent w-11/12"
      />
      <Search
        onClick={GetPeople}
        size={20}
        className="text-gray-400 hover:text-green-500 transition-colors duration-300"
      />
    </div>
  )
}
export default SearchBar
