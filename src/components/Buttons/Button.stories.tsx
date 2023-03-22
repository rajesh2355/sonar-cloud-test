import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Button from "./Button";
import "./Button.css";
interface ButtonProps {
  label: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className:
    | "button primary"
    | "button secondary"
    | "button success"
    | "button warning";
}

export default {
  title: "Atoms_With_Addons/Button",
  component: Button,
  argTypes: {
    onClickHandler: { action: "clicked" },
    className: {
      control: {
        type: "select",
        options: ["primary", "secondary", "success", "warning"],
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  className: "button primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  className: "button secondary",
};

export const Success = Template.bind({});
Success.args = {
  label: "Success",
  className: "button success",
};

export const Warning = Template.bind({});
Warning.args = {
  label: "Warning",
  className: "button warning",
};

// import React from "react";
// import { Story, Meta } from "@storybook/react/types-6-0";
// import Button from "./Button";
// import "./Button.css";
// interface ButtonProps {
//   label: string;
//   onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
//   className: string;
// }

// export default {
//   title: "Button",
//   component: Button,
//   argTypes: {
//     onClickHandler: { action: "clicked" },
//     className: {
//       control: {
//         type: "select",
//         options: ["Primary", "Secondary", "Success", "Warning"],
//       },
//     },
//   },
// } as Meta;

// const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   label: "Click me",
//   className: "button",
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Don't click me",
//   className: "button secondary",
// };
