import { cn } from "@/lib/utils"
import * as React from "react"

export type SectionProps = React.HTMLAttributes<HTMLElement>

export const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    "w-full py-10 md:py-12 lg:py-14 border-b border-grid/15 relative overflow-hidden [content-visibility:auto] [contain-intrinsic-size:1px_960px]",
                    className
                )}
                {...props}
            >
                {children}
            </section>
        )
    }
)

Section.displayName = "Section"
