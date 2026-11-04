"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { SearchIcon, Bell } from "lucide-react";

import { NavUser } from "./nav-user";
import sideBarData from "@/lib/sideBarData";
import { usePathname } from "next/navigation";


export function SiteHeader( ) {
  const path = usePathname();
  return (
    <header className="flex h-15  items-center gap-2 border-b transition-[width,height] ease-linear ">
      <div className="flex w-full items-center gap-2 px-4 lg:gap-2 lg:px-6 justify-between">
       
       <div className=" flex items-center">
         <SidebarTrigger className="-ml-1" />
        <h1 className='font-(--font-syne) capitalize'>{path.slice(1).replace('-', ' ')}</h1>
        </div>
        {/* <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-19"
        /> */}
        <div className="flex items-center justify-between  ">
          
          
          <div className="flex gap-7 items-center justify-end w-full">

            <div className="flex relative">
              <Input type="search" className="w-26 text-right" placeholder="search" />
              <SearchIcon className="h-4 w-4 text-muted-foreground absolute bottom-2 left-2" />
            </div>
            

            <Bell className="w-10"/>
             <NavUser  user={sideBarData.user} isSideBar={false} />
          </div>
        </div>
      </div>
    </header>
  );
}
