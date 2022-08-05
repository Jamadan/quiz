import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Start from './Start';

export default {
  title: 'Start',
  component: Start,
} as ComponentMeta<typeof Start>;

const Template: ComponentStory<typeof Start> = (args) => <Start {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  begin: () => console.log('BEGIN'),
};
