
import { useToast } from "@/hooks/use-toast";
import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardMetricCard } from "@/components/DashboardMetricCard";
import { StatusBadge } from "@/components/StatusBadge";
import { DataTable } from "@/components/DataTable";
import { 
  BarChart, 
  PieChart, 
  Cell, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Pie,
  LineChart,
  Line
} from "recharts";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  BarChart as BarChartIcon, 
  DollarSign, 
  Package, 
  ShoppingCart, 
  Users 
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect } from "react";
import {
  mockProducts,
  mockOrders,
  mockCustomers,
  mockPayments,
  mockRevenueData,
  mockCategoryData,
  mockFinancialData
} from "@/data/mockData";

// Custom colors for charts
const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

const Dashboard = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Display welcome toast when dashboard loads
    toast({
      title: "Dashboard updated",
      description: "All metrics have been refreshed with the latest data.",
    });
  }, [toast]);

  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <div className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleString()}
          </div>
        </div>
        
        {/* Key Metrics */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <DashboardMetricCard
            title="Total Revenue"
            value={`$${mockFinancialData.totalRevenue.toLocaleString()}`}
            description="This month"
            trend={{ value: 12.3, isPositive: true }}
            icon={<DollarSign className="h-4 w-4" />}
          />
          <DashboardMetricCard
            title="Products"
            value={mockProducts.length.toString()}
            description="Active products"
            icon={<Package className="h-4 w-4" />}
          />
          <DashboardMetricCard
            title="Orders"
            value={mockOrders.length.toString()}
            description="Last 24 hours"
            trend={{ value: 5.7, isPositive: true }}
            icon={<ShoppingCart className="h-4 w-4" />}
          />
          <DashboardMetricCard
            title="Customers"
            value={mockCustomers.length.toString()}
            description="New this week"
            trend={{ value: 2.5, isPositive: true }}
            icon={<Users className="h-4 w-4" />}
          />
        </div>

        {/* Revenue Charts */}
        <Tabs defaultValue="revenue" className="space-y-4">
          <TabsList>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
          </TabsList>
          <TabsContent value="revenue" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChartIcon className="h-5 w-5" />
                  Revenue Trends
                </CardTitle>
                <CardDescription>Monthly revenue for the current year</CardDescription>
              </CardHeader>
              <CardContent className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={mockRevenueData}
                    margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
                    <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                    <Legend />
                    <Bar dataKey="revenue" name="Revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="categories" className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Sales by Category</CardTitle>
                <CardDescription>Distribution of sales across product categories</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={mockCategoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={90}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {mockCategoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Customer Activity</CardTitle>
                <CardDescription>Weekly active customer trend</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={[
                      { week: "Week 1", active: 120 },
                      { week: "Week 2", active: 132 },
                      { week: "Week 3", active: 125 },
                      { week: "Week 4", active: 150 },
                      { week: "Week 5", active: 178 },
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="active" stroke="#10b981" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="financial" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Gross Profit</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${mockFinancialData.profit.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Cost of Goods: ${mockFinancialData.costOfGoods.toLocaleString()}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Gross Margin</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockFinancialData.grossMargin}%</div>
                  <div className="mt-1 h-2 w-full rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${mockFinancialData.grossMargin}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Refunds</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${mockFinancialData.refunds.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Refund Rate: {mockFinancialData.refundRate}%
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Financial Summary</CardTitle>
                <CardDescription>Key financial metrics for your business</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Total Revenue</span>
                      <span className="font-medium">${mockFinancialData.totalRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Cost of Goods</span>
                      <span className="font-medium">${mockFinancialData.costOfGoods.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Gross Profit</span>
                      <span className="font-medium">${mockFinancialData.profit.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Refunds</span>
                      <span className="font-medium">${mockFinancialData.refunds.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Average Order Value</span>
                      <span className="font-medium">${mockFinancialData.averageOrderValue.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Gross Margin</span>
                      <span className="font-medium">{mockFinancialData.grossMargin}%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Product Availability */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Product Inventory Status</CardTitle>
              <CardDescription>Live product availability overview</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable
                data={mockProducts}
                columns={[
                  { key: "name", header: "Product" , cell: (item) => (
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-md bg-muted overflow-hidden">
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.category}</div>
                      </div>
                    </div>
                  )},
                  { key: "price", header: "Price", cell: (item) => `$${item.price.toFixed(2)}` },
                  { key: "stock", header: "Stock" },
                  { key: "status", header: "Status", cell: (item) => <StatusBadge status={item.status} /> },
                  { key: "sales", header: "Sales" },
                ]}
              />
            </CardContent>
          </Card>

          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Last 5 orders placed</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable
                data={mockOrders}
                columns={[
                  { key: "id", header: "Order ID" },
                  { key: "amount", header: "Amount", cell: (item) => `$${item.amount.toFixed(2)}` },
                  { key: "status", header: "Status", cell: (item) => <StatusBadge status={item.status} /> },
                ]}
              />
            </CardContent>
          </Card>

          {/* Recent Payments */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Payments</CardTitle>
              <CardDescription>Latest payment transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable
                data={mockPayments}
                columns={[
                  { key: "id", header: "Transaction" },
                  { key: "amount", header: "Amount", cell: (item) => `$${item.amount.toFixed(2)}` },
                  { key: "status", header: "Status", cell: (item) => <StatusBadge status={item.status} /> },
                ]}
              />
            </CardContent>
          </Card>

          {/* Top Customers */}
          <Card>
            <CardHeader>
              <CardTitle>Top Customers</CardTitle>
              <CardDescription>Customers by total spend</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable
                data={[...mockCustomers].sort((a, b) => b.totalSpent - a.totalSpent)}
                columns={[
                  { key: "name", header: "Customer" },
                  { key: "totalOrders", header: "Orders" },
                  { key: "totalSpent", header: "Spent", cell: (item) => `$${item.totalSpent.toFixed(2)}` },
                ]}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
