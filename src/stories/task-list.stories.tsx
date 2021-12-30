import { TaskList } from "@/components/task-list";
import { TasksProvider } from "@/contexts/tasks-context";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

export default {
  title: "Example/TaskList",
  component: TaskList,
} as ComponentMeta<typeof TaskList>;

export const Template: ComponentStory<typeof TaskList> = (args) => (
  <TasksProvider initialTasks={[{ id: 1, text: "a", done: false }]}>
    <TaskList {...args} />
  </TasksProvider>
);
