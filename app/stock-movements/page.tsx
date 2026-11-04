import { DataTableSimple } from '@/components/dataTableSimple'
import Heading from '@/components/Heading'
import { stockMovements } from '@/lib/data'
import React from 'react'

export default function StockMovements() {
  return (
   <>
   <Heading
               title={ "Stock Movements"}
              subtitle={'Every change to your stock, with the balance before and after.'}
              addItem={'Record Movement'}/>
    
     <div className=" mt-10 w-full min-w-0  bg-white rounded-xl">   
       
        <DataTableSimple data={stockMovements} />
         </div>
       </>

        
  )
}
