import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "jc-btn",
  {
    variants: {
      variant: {
        yellow: "jc-btn-yellow",
        pink: "jc-btn-pink",
        blue: "jc-btn-blue",
        purple: "jc-btn-purple",
        black: "jc-btn-black",
        white: "jc-btn-white",
        "outline-yellow": "jc-btn-outline-yellow",
        "outline-pink": "jc-btn-outline-pink",
        "outline-blue": "jc-btn-outline-blue",
        "outline-purple": "jc-btn-outline-purple",
        "outline-black": "jc-btn-outline-black",
        "outline-white": "jc-btn-outline-white",
        ghost: "jc-btn-ghost",
        link: "jc-btn-link",
        // Legacy variants for backwards compatibility
        default: "jc-btn-yellow",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 border-[0.2em] border-jc-black",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 border-[0.2em] border-jc-black",
      },
      size: {
        default: "jc-btn-default",
        sm: "jc-btn-sm",
        lg: "jc-btn-lg",
        icon: "jc-btn-icon",
      },
    },
    defaultVariants: {
      variant: "yellow",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
