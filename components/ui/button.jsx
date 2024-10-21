import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default: "bg-accent text-primary hover:bg-accent-hover",
        primary: "bg-primary text-white",
        outline:
          "border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary",
      },
      size: {
        default: "h-[44px] px-6",
        md: "h-[48px] px-6",
        lg: "h-[56px] px-8 text-sm uppercase tracking-[2px] ",
        
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
       className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID" // Your Google Drive download link
        download="Your_Resume.pdf" // Optional: To trigger the download
        target="_blank" // Opens in new tab
        rel="noopener noreferrer" // Security measure when using target="_blank"
      >
        Download Resume
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
