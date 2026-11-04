import React from 'react'
import sideBarData from '@/lib/sideBarData'
import Heading from '@/components/Heading'
import { SectionCards } from '@/components/section-cards'

export default function Overview() {
  return (
<>

<div className="">
  <Heading title={ `Welcome back, ${sideBarData.user.name}!`} 
  subtitle={`Here is what is happening with your inventory today.`} addItem={`Add Product`}/>
  
  <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards
               />
              {/* <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div> */}
            </div>
          </div>
        </div>
  </div>

</>  )
}
