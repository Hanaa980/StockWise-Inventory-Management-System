"use client"

import * as React from "react"
import Link from "next/link";
import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LayoutDashboardIcon, ListIcon, ChartBarIcon, FolderIcon, UsersIcon, CameraIcon, FileTextIcon, Settings2Icon, CircleHelpIcon, SearchIcon, DatabaseIcon, FileChartColumnIcon, FileIcon, CommandIcon, Boxes } from "lucide-react"
import { NavInventory } from "./ui/nav-inventory";
import { NavManagement } from "./ui/nav-management";

const data = {
  user: {
    name: "Hanaa",
    email: "Hanaaragab228gmail.com",
  },
  navMain: [
    {
      title: "Overview",
      url: "#",
      icon: (
        <LayoutDashboardIcon
        />
      ),
    },
    {
      title: "Products",
      url: "#",
      icon: (
        <ListIcon
        />
      ),
    },
    {
      title: "Categories",
      url: "#",
      icon: (
        <ChartBarIcon
        />
      ),
    },
    {
      title: "Suppliers",
      url: "#",
      icon: (
        <FolderIcon
        />
      ),
    },
   
  ],
   navInventory: [
    {
      title: "Stock Movements",
      url: "#",
      icon: (
        <LayoutDashboardIcon
        />
      ),
    },
    {
      title: "Low Stock",
      url: "#",
      icon: (
        <ListIcon
        />
      ),
    },
  
   
  ],
   navManagement: [
    {
      title: "Reports",
      url: "#",
      icon: (
        <LayoutDashboardIcon
        />
      ),
    },
    {
      title: "Settings",
      url: "#",
      icon: (
        <ListIcon
        />
      ),
    },
  
   
  ],
  navClouds: [
    {
      title: "Capture",
      icon: (
        <CameraIcon
        />
      ),
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: (
        <FileTextIcon
        />
      ),
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: (
        <FileTextIcon
        />
      ),
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: (
        <Settings2Icon
        />
      ),
    },
    {
      title: "Get Help",
      url: "#",
      icon: (
        <CircleHelpIcon
        />
      ),
    },
    {
      title: "Search",
      url: "#",
      icon: (
        <SearchIcon
        />
      ),
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: (
        <DatabaseIcon
        />
      ),
    },
    {
      name: "Reports",
      url: "#",
      icon: (
        <FileChartColumnIcon
        />
      ),
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: (
        <FileIcon
        />
      ),
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props} className="bg-(--primary-color) text-white">
     
     
      <SidebarHeader className="">
        <SidebarMenu className="">
          <SidebarMenuItem >
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5! h-15"
            >
              <Link href="#" className=" flex items-center gap-3">
               <Boxes className="size-9! text-white bg-(--secondary-color) p-1 rounded-lg" />
                <div className="flex flex-col ">
                <span className="text-lg font-semibold">StockWise</span>
                <span className="text-[13px] text-[#94A3B8] mx-auto">Inventory <br/> Management</span>
                </div>
               
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="flex justify-evenly">
        <NavMain items={data.navMain} />
        <NavInventory items={data.navInventory} />
        <NavManagement items={data.navManagement} />

      </SidebarContent>

      <SidebarFooter className="">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
