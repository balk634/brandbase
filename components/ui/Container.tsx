import { cn } from "@/lib/utils"

export function Container({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("container mx-auto w-full min-w-0 px-4 sm:px-6 lg:px-8 max-w-7xl [&>*]:min-w-0", className)} {...props}>
            {children}
        </div>
    )
}
