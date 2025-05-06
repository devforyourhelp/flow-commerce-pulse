
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  let statusColor = "";
  let statusText = status;
  
  switch (status) {
    case "in-stock":
      statusColor = "bg-success/20 text-success";
      statusText = "In Stock";
      break;
    case "low-stock":
      statusColor = "bg-warning/20 text-warning";
      statusText = "Low Stock";
      break;
    case "out-of-stock":
      statusColor = "bg-destructive/20 text-destructive";
      statusText = "Out of Stock";
      break;
    case "pending":
      statusColor = "bg-warning/20 text-warning";
      break;
    case "shipped":
      statusColor = "bg-primary/20 text-primary";
      break;
    case "delivered":
      statusColor = "bg-success/20 text-success";
      break;
    case "cancelled":
      statusColor = "bg-destructive/20 text-destructive";
      break;
    case "completed":
      statusColor = "bg-success/20 text-success";
      break;
    case "failed":
      statusColor = "bg-destructive/20 text-destructive";
      break;
    default:
      statusColor = "bg-muted text-muted-foreground";
  }

  return (
    <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-medium capitalize", statusColor, className)}>
      {statusText.replace("-", " ")}
    </span>
  );
}
