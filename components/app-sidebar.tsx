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
// import { LayoutDashboardIcon, ListIcon, ChartBarIcon, FolderIcon, UsersIcon, CameraIcon, FileTextIcon, Settings2Icon, CircleHelpIcon, SearchIcon, DatabaseIcon, FileChartColumnIcon, FileIcon, CommandIcon, Boxes, LayoutDashboard, Package, Tags, Truck, ArrowRightLeft, Triangle, TriangleAlert, ChartColumn, Settings } from "lucide-react"
import { NavInventory } from "./ui/nav-inventory";
import { NavManagement } from "./ui/nav-management";
import sideBarData from "@/lib/sideBarData";
import { Boxes } from "lucide-react";
import { usePathname } from "next/navigation";
// const data = {
//   user: {
//     name: "Hanaa",
//     email: "Hanaaragab228gmail.com",
//   },
//   navMain: [
//     {
//       title: "Overview",
//       url: "overview",
//       icon: (
//         <LayoutDashboard/>
//       ),
//     },
//     {
//       title: "Products",
//       url: "products",
//       icon: (
//         <Package
//         />
//       ),
//     },
//     {
//       title: "Categories",
//       url: "categories",
//       icon: (
//         <Tags
//         />
//       ),
//     },
//     {
//       title: "Suppliers",
//       url: "suppliers",
//       icon: (
//         <Truck
//         />
//       ),
//     },
   
//   ],
//    navInventory: [
//     {
//       title: "Stock Movements",
//       url: "stock-movements",
//       icon: (
//         <ArrowRightLeft
//         />
//       ),
//     },
//     {
//       title: "Low Stock",
//       url: "low-stock",
//       icon: (
//         <TriangleAlert
//         />
//       ),
//     },
  
   
//   ],
//    navManagement: [
//     {
//       title: "Reports",
//       url: "reports",
//       icon: (
//         <ChartColumn
//         />
//       ),
//     },
//     {
//       title: "Settings",
//       url: "settings",
//       icon: (
//         <Settings
//         />
//       ),
//     },
  
   
//   ],
//   navClouds: [
//     {
//       title: "Capture",
//       icon: (
//         <CameraIcon
//         />
//       ),
//       isActive: true,
//       url: "#",
//       items: [
//         {
//           title: "Active Proposals",
//           url: "#",
//         },
//         {
//           title: "Archived",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Proposal",
//       icon: (
//         <FileTextIcon
//         />
//       ),
//       url: "#",
//       items: [
//         {
//           title: "Active Proposals",
//           url: "#",
//         },
//         {
//           title: "Archived",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Prompts",
//       icon: (
//         <FileTextIcon
//         />
//       ),
//       url: "#",
//       items: [
//         {
//           title: "Active Proposals",
//           url: "#",
//         },
//         {
//           title: "Archived",
//           url: "#",
//         },
//       ],
//     },
//   ],
//   navSecondary: [
//     {
//       title: "Settings",
//       url: "#",
//       icon: (
//         <Settings2Icon
//         />
//       ),
//     },
//     {
//       title: "Get Help",
//       url: "#",
//       icon: (
//         <CircleHelpIcon
//         />
//       ),
//     },
//     {
//       title: "Search",
//       url: "#",
//       icon: (
//         <SearchIcon
//         />
//       ),
//     },
//   ],
//   documents: [
//     {
//       name: "Data Library",
//       url: "#",
//       icon: (
//         <DatabaseIcon
//         />
//       ),
//     },
//     {
//       name: "Reports",
//       url: "#",
//       icon: (
//         <FileChartColumnIcon
//         />
//       ),
//     },
//     {
//       name: "Word Assistant",
//       url: "#",
//       icon: (
//         <FileIcon
//         />
//       ),
//     },
//   ],
// }

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="offcanvas" {...props} className="bg-(--primary-color)">
     
     
      <SidebarHeader className="text-white">
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

      <SidebarContent className="flex justify-evenly text-white">
        <NavMain items={sideBarData.navMain} />
        <NavInventory items={sideBarData.navInventory} />
        <NavManagement items={sideBarData.navManagement} />

      </SidebarContent>

      <SidebarFooter className="text-white ">
        <NavUser user={sideBarData.user} isSideBar={true} />
        
      </SidebarFooter>
    </Sidebar>
  )
}
