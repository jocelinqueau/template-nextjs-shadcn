import { PropsWithChildren } from "react";

import { colors, sizes } from "@/components/shared/typography";
import { cn } from "@/lib/utils";

export const as = ["p", "span"] as const;

const sizesMap = {
  "1": "text-fl-2xl sm:text-fl-3xl",
  "2": "text-fl-xl sm:text-fl-2xl",
  "3": "text-fl-lg sm:text-fl-xl",
  "4": "text-fl-base sm:text-fl-lg",
  "5": "text-fl-sm sm:text-fl-base",
  "6": "text-fl-xs sm:text-fl-sm",
  "7": "text-fl-2xs sm:text-fl-xs",
  "8": "text-fl-3xs sm:text-fl-2xs",
  "9": "text-fl-3xs sm:text-fl-3xs",
};

export const lineHeights = ["100", "110", "120", "130", "140"] as const;

export const weights = [
  "light",
  "regular",
  "medium",
  "semibold",
  "bold",
  "extrabold",
] as const;

const weightsMap = {
  light: "font-light",
  regular: "font-regular",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
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
  "110": "leading-[110%]",
  "120": "leading-[120%]",
  "130": "leading-[130%]",
  "140": "leading-[140%]",
};

type TextAs = (typeof as)[number];
type TextSize = (typeof sizes)[number];
type TextColor = (typeof colors)[number];
type TextWeight = (typeof weights)[number];
type TextLineHeight = (typeof lineHeights)[number];

export interface TextProps {
  as?: TextAs;
  size?: TextSize;
  color?: TextColor;
  weight?: TextWeight;
  lineHeight?: TextLineHeight;
  className?: string;
}

const Text = ({
  as = "span",
  size = "5",
  color = "foreground",
  weight = "regular",
  lineHeight = "120",
  className,
  children,
}: PropsWithChildren<TextProps>) => {
  const Text = as;

  return (
    <Text
      className={cn(
        sizesMap[size],
        weightsMap[weight],
        lineHeightsMap[lineHeight],
        colorsMap[color],
        className,
      )}
    >
      {children}
    </Text>
  );
};

export default Text;
