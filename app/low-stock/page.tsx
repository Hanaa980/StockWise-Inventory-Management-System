import { DataTableSimple } from '@/components/dataTableSimple'
import Heading from '@/components/Heading'


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
