"use client";

import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type TimeLocation = {
  label: string;
  timeZone: string;
  locale: string;
};

const LOCATIONS: TimeLocation[] = [
  { label: "INDIA", timeZone: "Asia/Kolkata", locale: "en-IN" },
  { label: "USA", timeZone: "America/New_York", locale: "en-US" },
  { label: "ITALY", timeZone: "Europe/Rome", locale: "it-IT" },
  { label: "UK", timeZone: "Europe/London", locale: "en-GB" },
  { label: "GERMANY", timeZone: "Europe/Berlin", locale: "de-DE" },
];

export function WorldTimeBadges({ className }: { className?: string }) {
  const formatters = useMemo(() => {
    return LOCATIONS.map((loc) => ({
      ...loc,
      formatter: new Intl.DateTimeFormat(loc.locale, {
        timeZone: loc.timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    }));
  }, []);

  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());
    update();

    const intervalId = window.setInterval(update, 30_000);
    return () => window.clearInterval(intervalId);
  }, []);

  if (!now) return null;

  return (
    <div className={cn("flex w-full items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0 px-4 md:px-0", className)}>
      {formatters.map(({ label, formatter }) => (
        <Badge
          key={label}
          dot={false}
          className="flex-none justify-center bg-white/5 border-white/15 text-white/80 backdrop-blur-sm px-2 text-[10px] font-mono whitespace-nowrap"
        >
          {label}: {formatter.format(now)}
        </Badge>
      ))}
    </div>
  );
}
