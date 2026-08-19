import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "muslim-friendly" | "outline" | "secondary"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        {
          "bg-primary text-white": variant === "default",
          "bg-primary/10 text-primary": variant === "muslim-friendly", // Soft green for muslim-friendly
          "border border-foreground/20 text-foreground": variant === "outline",
          "bg-blue/10 text-blue": variant === "secondary", // Sky Blue accent
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
