"use client"

import Link from "next/link";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { CirclePlusIcon, MailIcon } from "lucide-react"
import { usePathname } from "next/navigation";

export function NavInventory({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: React.ReactNode
  }[]
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
              <SidebarGroupLabel>INVENTORY</SidebarGroupLabel>
        
      <SidebarGroupContent className="flex flex-col gap-2">
       
          <SidebarMenu>
          {items.map((item) => (
            <Link href={item.url} key={item.title}>
              <SidebarMenuItem >
              <SidebarMenuButton tooltip={item.title} isActive={pathname === `/${item.url}`}>
                {item.icon}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            </Link>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
