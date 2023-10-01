import { Submit } from ".";

export default {
  title: "Components/Submit",
  component: Submit,
  argTypes: {
    state: {
      options: ["clicked", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "clicked",
    className: {},
  },
};
