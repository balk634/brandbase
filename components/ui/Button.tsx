import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { IconArrowRight, IconArrowDown, IconArrowUpRight } from "@tabler/icons-react"

const buttonVariants = cva(
    "mi-btn inline-flex items-center justify-center text-center leading-tight whitespace-normal sm:whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider font-mono w-full sm:w-auto",
    {
        variants: {
            variant: {
                primary:
                    "bg-primary text-white hover:bg-primary/90 border border-primary transition-all",
                destructive:
                    "bg-red-500 text-white hover:bg-red-500/90",
                outline:
                    "border border-grid bg-transparent hover:bg-grid/5 text-ink",
                secondary:
                    "bg-grid/10 text-ink hover:bg-grid/20",
                ghost: "hover:bg-grid/10 hover:text-ink",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "min-h-10 px-6 py-2",
                sm: "min-h-8 px-4 py-1.5 text-xs",
                lg: "min-h-12 px-6 sm:px-8 py-3",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
    href?: string
    target?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        
        // Determine arrow type
        const href = props.href || (asChild ? (children as any)?.props?.href : undefined);
        const target = props.target || (asChild ? (children as any)?.props?.target : undefined);
        const isIconSize = size === "icon";
        
        let ArrowIcon = null;
        let arrowClassName = "";
        if (!isIconSize && href) {
            if (href.startsWith("#")) {
                ArrowIcon = IconArrowDown;
                arrowClassName = "group-hover/btn:translate-y-0.5";
            } else if (target === "_blank") {
                ArrowIcon = IconArrowUpRight;
                arrowClassName = "group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5";
            } else {
                ArrowIcon = IconArrowRight;
                arrowClassName = "group-hover/btn:translate-x-0.5";
            }
        }

        const arrowElement = ArrowIcon && (
            <ArrowIcon className={cn(
                "w-4 h-4 shrink-0 transition-transform duration-200",
                arrowClassName
            )} />
        );

        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }), ArrowIcon && "gap-2 group/btn")}
                ref={ref}
                {...props}
            >
                {asChild ? (
                    React.isValidElement(children) ? (
                        React.cloneElement(children as React.ReactElement<any>, {
                            children: (
                                <>
                                    {(children as React.ReactElement<any>).props.children}
                                    {arrowElement}
                                </>
                            )
                        })
                    ) : children
                ) : (
                    <>
                        {children}
                        {arrowElement}
                    </>
                )}
            </Comp>
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
