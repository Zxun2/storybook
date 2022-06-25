import React from "react";

import Task from "./Task";

// Think of each story as a permutation of a component.
// You can have as many stories per component as you need.

export default {
  component: Task, // The component itself
  // 👇 The title prop is optional.
  title: "Task",
};

// 💡 Template.bind({}) is a standard JavaScript technique for making a copy of a function.
// We use this technique to allow each exported story to set its own properties, but use the same implementation.

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <Task {...args} />;

// 👇 Each story then reuses that template
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
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
