import { TaskList } from "@/components/task-list";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

export default {
  title: "Example/TaskList",
  component: TaskList,
} as ComponentMeta<typeof TaskList>;

export const Template: ComponentStory<typeof TaskList> = (args) => (
  <TaskList {...args} />
);
