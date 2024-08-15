import { Meta, StoryFn } from "@storybook/react";
import React from "react";

import Tag, { sizes } from "./tag";

export default {
  title: "Components/Tag",
  component: Tag,
  argTypes: {
    color: {
      control: { type: "color" },
    },
    size: {
      control: { type: "select" },
      options: sizes,
    },
  },
} as Meta;

export const Default: StoryFn = (args) => (
  <Tag color="red" label="hello" {...args} />
);
