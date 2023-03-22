import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Task from "./Task";

interface TaskProps {
  task: {
    id: string;
    title: string;
    state: string;
  };
  onArchiveTask(id: string): void;
  onPinTask(id: string): void;
}

export default {
  component: Task,
  title: "Atoms/Task",
} as Meta;

const Template: Story<TaskProps> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_PINNED",
  },
};
