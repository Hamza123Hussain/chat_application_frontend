import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
const UserSettings = () => {
  return (
    <div className=" h-1/4 p-2">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Chat Settings</AccordionTrigger>
          <AccordionContent>jncanjnu</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default UserSettings
