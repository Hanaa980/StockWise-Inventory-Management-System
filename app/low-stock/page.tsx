import Heading from '@/components/Heading'
import React from 'react'

export default function LowStock() {
  return (
   <>
   <Heading
            title={ "Low Stock"}
           subtitle={'Products at or below their minimum stock level. Restock these first.'}
         />
    </>

  )
}
