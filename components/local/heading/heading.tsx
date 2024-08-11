import { PropsWithChildren } from "react";

import { colors, sizes } from "@/components/shared/typography";
import { cn } from "@/lib/utils";

export const as = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

export const weights = [
  "regular",
  "medium",
  "semibold",
  "bold",
  "extrabold",
  "black",
] as const;

export const lineHeights = ["100", "105", "110", "120"] as const;

const sizesMap = {
  "1": "text-fl-3xl sm:text-fl-5xl",
  "2": "text-fl-2xl sm:text-fl-4xl",
  "3": "text-fl-xl sm:text-fl-3xl",
  "4": "text-fl-lg sm:text-fl-2xl",
  "5": "text-fl-md sm:text-fl-xl",
  "6": "text-fl-base sm:text-fl-lg",
  "7": "text-fl-sm sm:text-fl-base",
  "8": "text-fl-2xs sm:text-fl-sm",
  "9": "text-fl-3xs sm:text-fl-xs",
};

const weightsMap = {
  regular: "font-regular",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

const colorsMap = {
  foreground: "text-foreground",
  primary: "text-primary",
  secondary: "text-secondary",
  destructive: "text-destructive",
  accent: "text-accent",
  muted: "text-muted-foreground",
  background: "text-background",
  card: "text-card-foreground",
};

const lineHeightsMap = {
  "100": "leading-[100%]",
  "105": "leading-[105%]",
  "110": "leading-[110%]",
  "120": "leading-[120%]",
};

type HeadingAs = (typeof as)[number];
type HeadingSize = (typeof sizes)[number];
type HeadingColor = (typeof colors)[number];
type HeadingWeight = (typeof weights)[number];
type HeadingLineHeight = (typeof lineHeights)[number];

export interface HeadingProps {
  as?: HeadingAs;
  size?: HeadingSize;
  className?: string;
  color?: HeadingColor;
  weight?: HeadingWeight;
  lineHeight?: HeadingLineHeight;
}

const Heading = ({
  as = "h1",
  size = "1",
  className,
  color = "foreground",
  weight = "semibold",
  lineHeight = "105",
  children,
}: PropsWithChildren<HeadingProps>) => {
  const Tag = as;

  return (
    <Tag
      className={cn(
        colorsMap[color],
        weightsMap[weight],
        sizesMap[size],
        lineHeightsMap[lineHeight],
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default Heading;
