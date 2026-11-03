export type Category = {
  id: string;
  name: string;
  description: string;
};

export type Supplier = {
  id: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  status: "Active" | "Inactive";
};

export type Product = {
  id: string;
  name: string;
  sku: string;
  categoryId: string;
  supplierId: string;
  price: number;
  cost: number;
  quantity: number;
  minStock: number;
  unit: string;
};

export type StockMovement = {
  id: string;
  productId: string;
  type: "IN" | "OUT" | "ADJUSTMENT";
  quantity: number;
  date: string;
  notes: string;
};

export type CurrentUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string | null;
  businessName: string;
};