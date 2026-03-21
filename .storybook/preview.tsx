import React from 'react';

import type {Preview} from '@storybook/react-vite';

import {UiProvider} from '../src/theme';

const ThemeWrapper = (Story: React.ComponentType) => {
  return (
    <UiProvider>
      <Story />
    </UiProvider>
  );
};

const preview: Preview = {
  decorators: [ThemeWrapper],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
};

export default preview;
