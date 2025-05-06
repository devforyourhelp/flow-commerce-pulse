// Mock data for the dashboard

export type ProductStatus = "in-stock" | "low-stock" | "out-of-stock";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: ProductStatus;
  image: string;
  sales: number;
}

export interface Order {
  id: string;
  customer: string;
  date: string;
  amount: number;
  status: "pending" | "shipped" | "delivered" | "cancelled";
  items: number;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  totalOrders: number;
  totalSpent: number;
  lastPurchase: string;
}

export interface Payment {
  id: string;
  date: string;
  amount: number;
  method: string;
  status: "completed" | "pending" | "failed";
}

export interface RevenueData {
  month: string;
  revenue: number;
}

export interface CategoryData {
  category: string;
  value: number;
}

// Mock Products - Updated for health supplements with better images
export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Whey Protein Isolate",
    category: "Protein Supplements",
    price: 59.99,
    stock: 42,
    status: "in-stock",
    image: "https://images.unsplash.com/photo-1612548403247-aa2873e9422d?q=80&w=400&auto=format&fit=crop",
    sales: 153
  },
  {
    id: "2",
    name: "Plant-Based Protein",
    category: "Protein Supplements",
    price: 49.99,
    stock: 15,
    status: "low-stock",
    image: "https://images.unsplash.com/photo-1607185073253-54dc8427bd58?q=80&w=400&auto=format&fit=crop",
    sales: 78
  },
  {
    id: "3",
    name: "Pre-Workout Energy Mix",
    category: "Performance",
    price: 39.99,
    stock: 0,
    status: "out-of-stock",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=400&auto=format&fit=crop",
    sales: 95
  },
  {
    id: "4",
    name: "Collagen Peptides",
    category: "Wellness",
    price: 34.99,
    stock: 124,
    status: "in-stock",
    image: "https://images.unsplash.com/photo-1612549584721-fc64997c3172?q=80&w=400&auto=format&fit=crop",
    sales: 204
  },
  {
    id: "5",
    name: "BCAA Recovery Formula",
    category: "Amino Acids",
    price: 29.99,
    stock: 8,
    status: "low-stock",
    image: "https://images.unsplash.com/photo-1595411425732-e69c1abe47a9?q=80&w=400&auto=format&fit=crop",
    sales: 67
  },
];

// Mock Orders
export const mockOrders: Order[] = [
  { id: "ORD-1001", customer: "John Doe", date: "2025-05-05", amount: 599.98, status: "delivered", items: 2 },
  { id: "ORD-1002", customer: "Jane Smith", date: "2025-05-05", amount: 899.99, status: "shipped", items: 1 },
  { id: "ORD-1003", customer: "Bob Johnson", date: "2025-05-04", amount: 259.98, status: "pending", items: 3 },
  { id: "ORD-1004", customer: "Alice Brown", date: "2025-05-04", amount: 149.99, status: "cancelled", items: 1 },
  { id: "ORD-1005", customer: "Charlie Davis", date: "2025-05-03", amount: 1299.97, status: "delivered", items: 4 },
];

// Mock Customers
export const mockCustomers: Customer[] = [
  { id: "1", name: "John Doe", email: "john@example.com", totalOrders: 12, totalSpent: 3245.85, lastPurchase: "2025-05-05" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", totalOrders: 8, totalSpent: 2150.42, lastPurchase: "2025-05-05" },
  { id: "3", name: "Bob Johnson", email: "bob@example.com", totalOrders: 5, totalSpent: 1080.15, lastPurchase: "2025-05-04" },
  { id: "4", name: "Alice Brown", email: "alice@example.com", totalOrders: 3, totalSpent: 450.75, lastPurchase: "2025-05-04" },
  { id: "5", name: "Charlie Davis", email: "charlie@example.com", totalOrders: 7, totalSpent: 1899.99, lastPurchase: "2025-05-03" },
];

// Mock Payments
export const mockPayments: Payment[] = [
  { id: "PMT-1001", date: "2025-05-05", amount: 599.98, method: "Credit Card", status: "completed" },
  { id: "PMT-1002", date: "2025-05-05", amount: 899.99, method: "PayPal", status: "completed" },
  { id: "PMT-1003", date: "2025-05-04", amount: 259.98, method: "Credit Card", status: "pending" },
  { id: "PMT-1004", date: "2025-05-04", amount: 149.99, method: "Bank Transfer", status: "failed" },
  { id: "PMT-1005", date: "2025-05-03", amount: 1299.97, method: "Credit Card", status: "completed" },
];

// Mock Revenue Data
export const mockRevenueData: RevenueData[] = [
  { month: "Jan", revenue: 12500 },
  { month: "Feb", revenue: 15000 },
  { month: "Mar", revenue: 18000 },
  { month: "Apr", revenue: 22000 },
  { month: "May", revenue: 29000 },
  { month: "Jun", revenue: 25000 },
  { month: "Jul", revenue: 28000 },
  { month: "Aug", revenue: 32000 },
  { month: "Sep", revenue: 27000 },
  { month: "Oct", revenue: 30000 },
  { month: "Nov", revenue: 34000 },
  { month: "Dec", revenue: 45000 },
];

// Mock Category Data for pie chart
export const mockCategoryData: CategoryData[] = [
  { category: "Electronics", value: 45 },
  { category: "Clothing", value: 25 },
  { category: "Accessories", value: 15 },
  { category: "Home & Garden", value: 10 },
  { category: "Sports", value: 5 },
];

// Financial data
export const mockFinancialData = {
  totalRevenue: 267500,
  profit: 102500,
  costOfGoods: 165000,
  grossMargin: 38.3,
  refunds: 8500,
  refundRate: 3.2,
  averageOrderValue: 175.25,
};
