import React from "react";

import { cn } from "@/lib/utils";

type Size = "md" | "sm";

interface TagProps {
  color: string;
  label: string;
  size?: Size;
}

export const sizes = ["sm", "md"] as const;

const sizeClasses = {
  sm: "px-1 py-0.5 text-xs",
  md: "px-1.5 py-0.5 text-sm",
};

export const Tag = ({ color, label, size = "md" }: TagProps) => {
  return (
    <div
      className={cn(
        "flex max-h-max max-w-max items-center justify-center font-medium",
        sizeClasses[size],
      )}
      style={{
        border: `1.5px solid ${color}`,
        color: color,
        borderRadius: "4px",
        lineHeight: size === "sm" ? "100%" : "105%",
      }}
    >
      {label}
    </div>
  );
};

export default Tag;
