import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Parts from "../components/parts";

export default {
  title: "Example/Parts",
  component: Parts,
} as ComponentMeta<typeof Parts>;

const Template: ComponentStory<typeof Parts> = (args) => <Parts {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: 0,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: 1,
};
