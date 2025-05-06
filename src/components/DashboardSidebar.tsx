
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  BarChart,
  Package,
  ShoppingCart,
  Users,
  CreditCard,
  Settings,
  Home,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

function SidebarLink({ href, icon, label, isActive }: SidebarLinkProps) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild className={cn(isActive && "bg-sidebar-accent")}>
        <Link to={href} className="flex items-center gap-2">
          {icon}
          <span>{label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

interface DashboardSidebarProps {
  activePath?: string;
}

export function DashboardSidebar({ activePath = "/" }: DashboardSidebarProps) {
  const menuItems = [
    { href: "/", icon: <Home size={18} />, label: "Overview" },
    { href: "/products", icon: <Package size={18} />, label: "Products" },
    { href: "/orders", icon: <ShoppingCart size={18} />, label: "Orders" },
    { href: "/customers", icon: <Users size={18} />, label: "Customers" },
    { href: "/payments", icon: <CreditCard size={18} />, label: "Payments" },
    { href: "/analytics", icon: <BarChart size={18} />, label: "Analytics" },
    { href: "/settings", icon: <Settings size={18} />, label: "Settings" },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="px-4 py-6">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/1e770bc4-6283-4193-a476-304e2636beb8.png" 
            alt="Health-plus logo" 
            className="h-8 w-auto" 
          />
          <span className="font-semibold text-xl">HealthPlus</span>
        </Link>
        <div className="absolute right-2 top-3 md:hidden">
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarLink
                  key={item.href}
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                  isActive={activePath === item.href}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
