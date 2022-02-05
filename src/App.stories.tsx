import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import App from './App';
export default {
  title: 'App',
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App />;

export const Basic = Template.bind({});
