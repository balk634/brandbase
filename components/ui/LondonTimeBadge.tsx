"use client";

import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function LondonTimeBadge({ className }: { className?: string }) {
  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
      }),
    []
  );

  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setTime(formatter.format(new Date()));
    update();

    const intervalId = window.setInterval(update, 30_000);
    return () => window.clearInterval(intervalId);
  }, [formatter]);

  if (!time) return null;

  return (
    <Badge
      variant="online"
      pulse
      className={cn(
        "bg-white/5 border-white/15 text-white/90 backdrop-blur-sm",
        className
      )}
    >
      LONDON: {time} (ONLINE)
    </Badge>
  );
}

