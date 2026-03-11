import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "online" | "offline" | "busy" | "default";
    className?: string;
    pulse?: boolean;
    dot?: boolean;
}

export function Badge({ children, variant = "default", className, pulse = false, dot = true }: BadgeProps) {
    const getDotColor = () => {
        switch (variant) {
            case "online": return "bg-green-600";
            case "offline": return "bg-gray-400";
            case "busy": return "bg-red-500";
            default: return "bg-primary";
        }
    };

    return (
        <div className={cn(
            "inline-flex items-center gap-2 px-3 py-1 border border-primary/20 bg-white/50 backdrop-blur-sm text-xs font-mono uppercase tracking-widest text-ink",
            className
        )}>
            {dot && (
                <span className="relative flex h-2 w-2">
                    {pulse && (
                        <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", getDotColor())}></span>
                    )}
                    <span className={cn("relative inline-flex rounded-sm h-2 w-2", getDotColor())}></span>
                </span>
            )}
            {children}
        </div>
    );
}
