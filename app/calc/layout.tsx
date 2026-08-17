import { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  title: "Medbase Calculator",
  description: "Internal pricing calculator for Medbase",
};

export default function CalcLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}