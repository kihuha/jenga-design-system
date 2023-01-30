import { Story, Meta } from '@storybook/angular/types-6-0';
import { Alert } from 'projects/jenga-ds/src/lib/alert/alert.component';

export default {
  title: 'Jenga-DS/Alert',
  component: Alert,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Alert> = (args: Alert) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
