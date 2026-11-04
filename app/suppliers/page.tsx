import { DataTableSimple } from '@/components/dataTableSimple'
import Heading from '@/components/Heading'
import { suppliers } from '@/lib/data'
import React from 'react'

export default function Suppliers() {
  return (
    <>
    <Heading
            title={ "Suppliers"}
           subtitle={'Keep supplier contacts and sourcing status up to date.'}
           addItem={'Add Supplier'}/>

      <div className=" mt-10 w-full min-w-0  bg-white rounded-xl">   

   <DataTableSimple data={suppliers} />
  
  </div>  </>
  )
}
