import { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { colors, sizes } from "@/components/shared/typography";

import Heading, { as, HeadingProps, lineHeights, weights } from "./heading";

const meta: Meta<typeof Text> = {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    size: {
      options: sizes,
      control: { type: "select" },
    },
    as: {
      options: as,
      control: { type: "select" },
    },
    color: {
      options: colors,
      control: { type: "select" },
    },
    weight: {
      options: weights,
      control: { type: "select" },
    },
    lineHeight: {
      options: lineHeights,
      control: { type: "select" },
    },
  },
  args: {
    size: "1",
    children: "Hello Heading",
    as: "h1",
    color: "foreground",
    weight: "semibold",
    lineHeight: "105",
  },
} as Meta;

export default meta;

export const Default: StoryFn<typeof Heading> = (args: HeadingProps) => (
  <Heading {...args} />
);
