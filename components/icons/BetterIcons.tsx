import * as React from "react";

export type SvgProps = React.SVGProps<SVGSVGElement>;

const baseSvgProps = {
  fill: "none",
  stroke: "currentColor",
  shapeRendering: "geometricPrecision",
  "aria-hidden": true,
  focusable: false,
} as const;

export function LayoutGridIcon(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...baseSvgProps}
      {...props}
    >
      <path d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z" />
    </svg>
  );
}

export function SitemapIcon(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...baseSvgProps}
      {...props}
    >
      <path d="M3 17a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm12 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zM9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zM6 15v-1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1m-6-6v3" />
    </svg>
  );
}

export function SparkIcon(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...baseSvgProps}
      {...props}
    >
      <path d="M3 12c6.268 0 9-2.637 9-9c0 6.363 2.713 9 9 9c-6.287 0-9 2.713-9 9c0-6.287-2.732-9-9-9Z" />
    </svg>
  );
}

export function CrownIcon(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...baseSvgProps}
      {...props}
    >
      <path d="M19.2 17L21 7l-6.3 3L12 7l-2.7 3L3 7l1.8 10z" />
    </svg>
  );
}

export function SearchIcon(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...baseSvgProps}
      {...props}
    >
      <path d="m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0" />
    </svg>
  );
}

export function ShieldIcon(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...baseSvgProps}
      {...props}
    >
      <path d="M5 18L3.13 4.913a.996.996 0 0 1 .774-1.114l7.662-1.703a2 2 0 0 1 .868 0L20.096 3.8c.51.113.848.596.774 1.114L19 18c-.07.495-.5 3.5-7 3.5S5.07 18.495 5 18" />
    </svg>
  );
}

export function KeyIcon(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...baseSvgProps}
      {...props}
    >
      <path d="M10 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0m0 0h12v3m-4-3v3" />
    </svg>
  );
}

export function ChatLinesIcon(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...baseSvgProps}
      {...props}
    >
      <path d="M8 10h8m-8 4h4m0 8c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22" />
    </svg>
  );
}

export function CodeIcon(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...baseSvgProps}
      {...props}
    >
      <path d="m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16" />
    </svg>
  );
}

export function BracketsIcon(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...baseSvgProps}
      {...props}
    >
      <path d="M8 4H5v16h3m8-16h3v16h-3" />
    </svg>
  );
}

export function MessageOffIcon(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...baseSvgProps}
      {...props}
    >
      <path d="M8 9h1m4 0h3m-8 4h5M8 4h10a3 3 0 0 1 3 3v8c0 .577-.163 1.116-.445 1.573M18 18h-5l-5 3v-3H6a3 3 0 0 1-3-3V7c0-1.085.576-2.036 1.439-2.562M3 3l18 18" />
    </svg>
  );
}

export function GhostIcon(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...baseSvgProps}
      {...props}
    >
      <path d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1-3.1 1.4a1.65 1.65 0 0 0-2.6 0a1.65 1.65 0 0 1-2.6 0a1.65 1.65 0 0 0-2.6 0A1.78 1.78 0 0 1 5 18zm5-1h.01M14 10h.01M10 14a3.5 3.5 0 0 0 4 0" />
    </svg>
  );
}

export function HourglassIcon(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...baseSvgProps}
      {...props}
    >
      <path d="M12 12a7 7 0 0 0 7-7H5a7 7 0 0 0 7 7m0 0a7 7 0 0 1 7 7H5a7 7 0 0 1 7-7M5 2h14M5 22h14" />
    </svg>
  );
}

export function UsersIcon(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...baseSvgProps}
      {...props}
    >
      <path d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-17.87a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85" />
    </svg>
  );
}

export function ReceiptIcon(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...baseSvgProps}
      {...props}
    >
      <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-3-2l-2 2l-2-2l-2 2l-2-2zM9 7h6m-6 4h6m-2 4h2" />
    </svg>
  );
}

export function TagIcon(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...baseSvgProps}
      {...props}
    >
      <path d="M7.5 7.5a1 1 0 1 0 0 .01z" />
      <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592-5.592a2.41 2.41 0 0 0 0-3.408l-7.71-7.71A2 2 0 0 0 11.172 3H6a3 3 0 0 0-3 3" />
    </svg>
  );
}

export function ChartFunnelIcon(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...baseSvgProps}
      {...props}
    >
      <path d="M4.387 3h15.226a1 1 0 0 1 .948 1.316l-5.105 15.316A2 2 0 0 1 13.558 21h-3.116a2 2 0 0 1-1.898-1.368L3.44 4.316A1 1 0 0 1 4.387 3M5 9h14M7 15h10" />
    </svg>
  );
}

export function CalendarCheckIcon(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...baseSvgProps}
      {...props}
    >
      <path d="M11.5 21H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M16 3v4M8 3v4m-4 4h16m-5 8l2 2l4-4" />
    </svg>
  );
}

export function AppWindowIcon(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...baseSvgProps}
      {...props}
    >
      <path d="M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" />
      <path d="M3 9h18" />
      <rect x="6.5" y="6.5" width="1" height="1" fill="currentColor" stroke="none" />
      <rect x="8.5" y="6.5" width="1" height="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BuildingIcon(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...baseSvgProps}
      {...props}
    >
      <path d="m10 9.01l.01-.011M14 9.01l.01-.011M10 13.01l.01-.011m3.99.011l.01-.011M10 17.01l.01-.011m3.99.011l.01-.011M6 20.4V5.6a.6.6 0 0 1 .6-.6H12V3.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6" />
    </svg>
  );
}

export function UserIcon(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...baseSvgProps}
      {...props}
    >
      <path d="M5 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1m-7-8a4 4 0 1 0 0-8a4 4 0 0 0 0 8" />
    </svg>
  );
}
