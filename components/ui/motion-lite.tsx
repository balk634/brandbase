import * as React from "react";

type MotionShimProps = {
  animate?: unknown;
  exit?: unknown;
  initial?: unknown;
  layout?: unknown;
  layoutId?: unknown;
  transition?: unknown;
  variants?: unknown;
  viewport?: unknown;
  whileDrag?: unknown;
  whileFocus?: unknown;
  whileHover?: unknown;
  whileInView?: unknown;
  whileTap?: unknown;
};

type IntrinsicTag = keyof React.JSX.IntrinsicElements;

function omitMotionProps<T extends MotionShimProps>(props: T) {
  const {
    animate,
    exit,
    initial,
    layout,
    layoutId,
    transition,
    variants,
    viewport,
    whileDrag,
    whileFocus,
    whileHover,
    whileInView,
    whileTap,
    ...rest
  } = props;

  void animate;
  void exit;
  void initial;
  void layout;
  void layoutId;
  void transition;
  void variants;
  void viewport;
  void whileDrag;
  void whileFocus;
  void whileHover;
  void whileInView;
  void whileTap;

  return rest;
}

const motionCache = new Map<string, React.ComponentType<Record<string, unknown>>>();

function getMotionComponent(tag: IntrinsicTag) {
  const key = String(tag);
  const cached = motionCache.get(key);
  if (cached) return cached;

  const Component = React.forwardRef<HTMLElement, MotionShimProps & Record<string, unknown>>(
    (props, ref) => {
      const cleanProps = omitMotionProps(props);
      return React.createElement(tag, { ...cleanProps, ref });
    }
  );

  Component.displayName = `motion-lite.${key}`;
  motionCache.set(key, Component);
  return Component;
}

type MotionProxy = {
  [K in IntrinsicTag]: React.ComponentType<React.JSX.IntrinsicElements[K] & MotionShimProps>;
};

export const motion = new Proxy({} as MotionProxy, {
  get(_target, prop) {
    return getMotionComponent(prop as IntrinsicTag);
  },
});

export function AnimatePresence({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
