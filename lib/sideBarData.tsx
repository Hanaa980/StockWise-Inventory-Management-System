import { LayoutDashboardIcon, ListIcon, ChartBarIcon, FolderIcon, UsersIcon, CameraIcon, FileTextIcon, Settings2Icon, CircleHelpIcon, SearchIcon, DatabaseIcon, FileChartColumnIcon, FileIcon, CommandIcon, Boxes, LayoutDashboard, Package, Tags, Truck, ArrowRightLeft, Triangle, TriangleAlert, ChartColumn, Settings } from "lucide-react"

 const sideBarData = {
  user: {
    name: "Hanaa",
    email: "Hanaaragab228gmail.com",
  },
  navMain: [
    {
      title: "Overview",
      url: "overview",
      icon: (
        <LayoutDashboard/>
      ),
    },
    {
      title: "Products",
      url: "products",
      icon: (
        <Package
        />
      ),
    },
    {
      title: "Categories",
      url: "categories",
      icon: (
        <Tags
        />
      ),
    },
    {
      title: "Suppliers",
      url: "suppliers",
      icon: (
        <Truck
        />
      ),
    },
   
  ],
   navInventory: [
    {
      title: "Stock Movements",
      url: "stock-movements",
      icon: (
        <ArrowRightLeft
        />
      ),
    },
    {
      title: "Low Stock",
      url: "low-stock",
      icon: (
        <TriangleAlert
        />
      ),
    },
  
   
  ],
   navManagement: [
    {
      title: "Reports",
      url: "reports",
      icon: (
        <ChartColumn
        />
      ),
    },
    {
      title: "Settings",
      url: "settings",
      icon: (
        <Settings
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

export default sideBarData;