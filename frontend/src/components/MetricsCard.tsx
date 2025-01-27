import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  className?: string;
}

export function MetricsCard({ title, value, change, isPositive, className }: MetricCardProps) {
  return (
    <Card className={cn("p-6 backdrop-blur-sm bg-white/90 animate-fadeIn", className)}>
      <p className="text-sm font-medium text-muted-foreground">{title}</p>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
      {change && (
        <p className={cn("mt-1 text-sm", isPositive ? "text-green-600" : "text-red-600")}>
          {isPositive ? "+" : "-"}{change}
        </p>
      )}
    </Card>
  );
}
