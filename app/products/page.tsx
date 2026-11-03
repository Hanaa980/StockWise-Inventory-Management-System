import { ChartAreaInteractive } from '@/components/chart-area-interactive'
import { DataTable } from '@/components/data-table'
import Heading from '@/components/Heading'
import { SectionCards } from '@/components/section-cards'
import { products } from '@/lib/data'


export default function Products() {
  return (
    <>
    
    <Heading
     title={ "Products"}
    subtitle={'Manage your catalogue, pricing and stock levels.'}
    addItem={'Add Product'}/>
                   <DataTable data={products} />

    </>
  )
}
