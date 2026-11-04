import Heading from '@/components/Heading'
import React from 'react'
import { categories } from '@/lib/data'
import { DataTableSimple } from '@/components/dataTableSimple'

export default function Categories() {
  return (
   <>
   <Heading
        title={ "Categories"}
       subtitle={'Organise products into groups that match how you sell.'}
       addItem={'Add Category'}/>

   <div className=" mt-10 w-full min-w-0  bg-white rounded-xl">   

 <DataTableSimple data={categories} />
  </div>
   </>
  )
}
