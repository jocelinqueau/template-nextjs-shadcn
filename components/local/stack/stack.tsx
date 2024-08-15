import { ElementType, PropsWithChildren } from "react";

import { StackGap } from "@/components/shared/spacing"
import { cn } from "@/lib/utils";

export const directions = [
  "row",
  "column",
  "column-reverse",
  "row-reverse",
] as const;
export const align = ["start", "center", "end", "stretch", "baseline"] as const;
export const justify = [
  "start",
  "center",
  "end",
  "between",
  "around",
  "evenly",
] as const;
export const wrap = ["nowrap", "wrap", "wrap-reverse"] as const;

const directionsMap = {
  row: "flex-row",
  column: "flex-col",
  "column-reverse": "flex-col-reverse",
  "row-reverse": "flex-row-reverse",
};

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const wrapMap = {
  nowrap: "flex-nowrap",
  wrap: "flex-wrap",
  "wrap-reverse": "flex-wrap-reverse",
};

const gapMap = {
  "2": "gap-[2px]",
  "4": "gap-[4px]",
  "3xs": "gap-fl-3xs",
  "2xs": "gap-fl-2xs",
  xs: "gap-fl-xs",
  sm: "gap-fl-sm",
  md: "gap-fl-md",
  lg: "gap-fl-lg",
  xl: "gap-fl-xl",
  "2xl": "gap-fl-2xl",
  "3xl": "gap-fl-3xl",
};

const rowGapMap = {
  "2": "gap-[2px]",
  "4": "gap-x-[4px]",
  "3xs": "gap-x-fl-3xs",
  "2xs": "gap-x-fl-2xs",
  xs: "gap-x-fl-xs",
  sm: "gap-x-fl-sm",
  md: "gap-x-fl-md",
  lg: "gap-x-fl-lg",
  xl: "gap-x-fl-xl",
  "2xl": "gap-x-fl-2xl",
  "3xl": "gap-x-fl-3xl",
};

const columnGapMap = {
  "2": "gap-y-2",
  "4": "gap-y-4",
  "3xs": "gap-y-fl-3xs",
  "2xs": "gap-y-fl-2xs",
  xs: "gap-y-fl-xs",
  sm: "gap-y-fl-sm",
  md: "gap-y-fl-md",
  lg: "gap-y-fl-lg",
  xl: "gap-y-fl-xl",
  "2xl": "gap-y-fl-2xl",
  "3xl": "gap-y-fl-3xl",
};

type StackDirection = (typeof directions)[number];
type StackAlign = (typeof align)[number];
type StackJustify = (typeof justify)[number];
type StackWrap = (typeof wrap)[number];

export interface StackProps<T extends ElementType> {
  gap?: StackGap;
  direction?: StackDirection;
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: StackWrap;
  className?: string;
  rowGap?: StackGap;
  columnGap?: StackGap;
  as?: T;
  center?: boolean;
}

type StackComponent = <T extends ElementType = "div">(
  props: PropsWithChildren<
    StackProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof StackProps<T>>
  >,
) => React.ReactElement;

const Stack: StackComponent = ({
  gap = "2",
  direction = "column",
  align = "start",
  justify = "start",
  wrap = "nowrap",
  rowGap,
  columnGap,
  children,
  as = "div",
  className,
  center,
  ...rest
}) => {
  const Tag = as;

  return (
    <Tag
      className={cn(
        "flex",
        directionsMap[direction],
        alignMap[align],
        justifyMap[justify],
        wrapMap[wrap],
        gapMap[gap],
        rowGap && rowGapMap[rowGap],
        columnGap && columnGapMap[columnGap],
        center && "items-center justify-center",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Stack;

export const XStack: StackComponent = (props) => (
  <Stack {...props} direction="row" />
);
export const YStack: StackComponent = (props) => (
  <Stack {...props} direction="column" />
);
