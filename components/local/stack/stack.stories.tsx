import { Meta, StoryFn } from "@storybook/react";

import { gaps } from "@/components/shared/spacing";
import Spacing from "@/components/utils/spacing/spacing";

import Stack, { directions } from "./stack";

const meta: Meta<typeof Stack> = {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    gap: {
      control: { type: "select" },
      options: gaps,
    },
    direction: {
      control: { type: "select" },
      options: directions,
    },
  },
  args: {
    gap: "md",
    direction: "row",
  },
};

export default meta;

export const Default: StoryFn<typeof Stack> = (args) => (
  <Stack {...args}>
    <Spacing size="size-fl-md" />
    <Spacing size="size-fl-lg" />
  </Stack>
);
