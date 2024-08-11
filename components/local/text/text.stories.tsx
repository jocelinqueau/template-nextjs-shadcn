import { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { colors, sizes } from "@/components/shared/typography";

import Text, { as, lineHeights, TextProps, weights } from "./text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  argTypes: {
    size: {
      options: sizes,
      control: { type: "select" },
      description: "The size of the text",
    },
    as: {
      options: as,
      control: { type: "select" },
      description: "The type of the text",
    },
    color: {
      options: colors,
      control: { type: "select" },
      description: "The color of the text",
    },
    weight: {
      options: weights,
      control: { type: "select" },
      description: "The weight of the text",
    },
    lineHeight: {
      options: lineHeights,
      control: { type: "select" },
      description: "The line height of the text",
    },
  },
  args: {
    size: "5",
    children: "Hello Text",
    as: "p",
    color: "foreground",
    weight: "semibold",
    lineHeight: "120",
  },
};

export const Default: StoryFn<typeof Text> = (args: TextProps) => (
  <Text {...args} />
);

export default meta;
