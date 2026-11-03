import { Plus } from 'lucide-react'
import React from 'react'



type textProps = {
title:string, subtitle:string, addItem?:string}


export default function Heading({title, subtitle, addItem}:textProps) {
  return (
<div className="mt-10 flex justify-between items-end w-[80%]">
  <div className="">
    <h1 className="text-3xl font-bold">{title}</h1>
    <p className="text-(--text-color)">{subtitle}</p>
  </div>
  <div className="">
    <button className="bg-(--secondary-color) text-white p-3 rounded-xl flex items-center gap-2">
        <Plus className="" />
        {addItem}</button>
  </div>
</div>
  )
}
