"use client"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { products,categories } from "@/lib/data";
import { TrendingUpIcon, TrendingDownIcon, Boxes, Layers, Wallet, TriangleAlert } from "lucide-react"

export const getDashboardStats = () => {
  const totalProducts = products.length;

  const totalStockUnits = products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const stockValue = products.reduce(
    (total, product) => total + product.quantity * product.cost,
    0
  );

  const lowStockItems = products.filter(
    (product) => product.quantity > 0 && product.quantity <= product.minStock
  ).length;

  const outOfStockItems = products.filter(
    (product) => product.quantity === 0
  ).length;

  return {
    totalProducts,
    totalStockUnits,
    stockValue,
    lowStockItems,
    outOfStockItems,
  };
};
export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-white-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>total Products</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {getDashboardStats().totalProducts}
          </CardTitle>
          <CardAction>
            {/* <Badge variant="outline"> */}
               <Boxes className="size-9! text-[#115E59] bg-[#CCFBF1] p-1 rounded-lg" />
            {/* </Badge> */}
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className=" flex gap-2 font-medium">
          </div>
          <div className="text-muted-foreground">
            {`Across ${categories.length} categories`}
          </div>
        </CardFooter>
      </Card>


      <Card className="@container/card">
        <CardHeader>
          <CardDescription>total Stock Units</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {getDashboardStats().totalStockUnits.toLocaleString()}
          </CardTitle>
          <CardAction>
            
             <Layers className="size-9! text-[#1E3A8A] bg-[#DBEAFE] p-1 rounded-lg" />
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
           
          
          </div>
          <div className="text-muted-foreground">
            Units on hand across all products
          </div>
        </CardFooter>
      </Card>
      
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Stock Value</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {getDashboardStats().stockValue.toLocaleString()}
          </CardTitle>
          <CardAction>
           <Wallet className="size-9! text-[#15803D] bg-[#DCFCE7] p-1 rounded-lg" />
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          
          <div className="text-muted-foreground">Valued at cost price</div>
        </CardFooter>
      </Card>


      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Low Stock Items</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {getDashboardStats().lowStockItems}
          </CardTitle>
          <CardAction>
          <TriangleAlert className="size-9! text-[#B45309] bg-[#FEF3C7] p-1 rounded-lg" />
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
         
          <div className="text-muted-foreground">{getDashboardStats().outOfStockItems.toLocaleString()} out of stock right now</div>
        </CardFooter>
      </Card>
    </div>
  )
}
