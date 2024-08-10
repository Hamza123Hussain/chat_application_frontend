import { Search } from 'lucide-react'
import React, { useState } from 'react'

const SearchBar = () => {
  const [searchterm, setsearch] = useState('')
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
      <Search size={20} />
    </div>
  )
}

export default SearchBar
