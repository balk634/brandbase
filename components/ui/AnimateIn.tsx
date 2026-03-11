import { motion } from "@/components/ui/motion-lite";

type AnimateInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
};

export function AnimateIn({ children, className, delay = 0, once = true }: AnimateInProps) {
  void once;

  return (
    <motion.div
      className={className}
      style={delay > 0 ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </motion.div>
  );
}
