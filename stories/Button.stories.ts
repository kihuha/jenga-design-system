import { Story, Meta } from '@storybook/angular/types-6-0';
import { Button } from 'projects/jenga-ds/src/lib/button/button.component';

export default {
  title: 'Jenga-DS/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  size: 'sm',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Button',
  icon: 'info',
};
