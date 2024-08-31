import React from 'react'

const Loader = () => {
  return (
    /* From Uiverse.io by JkHuger */

    <div className="flex-col gap-4 w-full flex items-center justify-center">
      <div className="w-20 h-20 border-4 border-transparent text-[#253d17] text-4xl animate-spin flex items-center justify-center border-t-[#253d17] rounded-full">
        <div className="w-16 h-16 border-4 border-transparent text-[#2d153f] text-2xl animate-spin flex items-center justify-center border-t-[#2d153f] rounded-full"></div>
      </div>
    </div>
  )
}

export default Loader
