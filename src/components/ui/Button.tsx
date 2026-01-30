import * as React from "react"
import { cn } from "@/lib/utils"

// Since I didn't install cva and radix-ui/react-slot, I will use a simpler implementation for now
// to avoid extra dependency issues unless requested.
// Wait, standard clean architecture usually involves these. 
// Let me stick to simple props for now to keep it efficient without installing more deps
// unless I install them.
// Actually, using "shadcn" like approach without the library is good.
// I'll implement a simple button with clsx/tailwind-merge.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost' | 'secondary' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'default', size = 'default', ...props }, ref) => {
        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-primary text-white hover:bg-primary/90": variant === 'default',
                        "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === 'secondary',
                        "border border-input bg-background hover:bg-accent hover:text-accent-foreground": variant === 'outline',
                        "hover:bg-accent hover:text-accent-foreground": variant === 'ghost',
                        "text-primary underline-offset-4 hover:underline": variant === 'link',
                        "h-10 px-4 py-2": size === 'default',
                        "h-9 rounded-md px-3": size === 'sm',
                        "h-11 rounded-md px-8": size === 'lg',
                        "h-10 w-10": size === 'icon',
                    },
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
