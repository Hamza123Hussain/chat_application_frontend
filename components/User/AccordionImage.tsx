import { Download } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const AccordionImage = ({ Name }: { Name: String }) => {
  return (
    <div className=" flex justify-between items-center">
      <Image
        src={Name == 'Image' ? '/Demo.webp' : '/File.png'}
        width={40}
        height={20}
        alt="demo"
        className=" rounded-full"
      />

      <Download size={20} />
    </div>
  )
}

export default AccordionImage
