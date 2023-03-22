import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import TextField from "./TextField";

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  primary: "Name" | "Email" | "Phone";
}
export default {
  title: "Atoms_With_Addons/TextField",
  component: TextField,
  argTypes: {
    onChange: { action: "changed" },
    label: {
      control: {
        type: "select",
        options: ["Name", "Email", "Phone"],
      },
    },
    primary: {
      control: {
        type: "radio",
        options: ["Name", "Email", "Phone"],
      },
    },
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Name",
  value: "",
  primary: "Name",
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: "Email",
  value: "John Doe",
  primary: "Email",
};

export const Test = Template.bind({});
Test.args = {
  label: "Name",
};
