import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Image from 'next/image'
import { Download } from 'lucide-react'
import AccordionImage from './AccordionImage'

const UserDetailAccordions = ({ Name }: { Name: string }) => {
  return (
    <div className=" h-1/4 p-2">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{Name}s Shared</AccordionTrigger>
          <AccordionContent>
            <AccordionImage Name={Name} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default UserDetailAccordions
