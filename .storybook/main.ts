/* eslint-disable @typescript-eslint/naming-convention */
import path from 'path';
import {fileURLToPath} from 'url';

import type {StorybookConfig} from '@storybook/react-vite';
import type {PropItem} from 'react-docgen-typescript';
import {mergeConfig} from 'vite';
import svgr from 'vite-plugin-svgr';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  framework: '@storybook/react-vite',

  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],

  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      propFilter: (prop: PropItem) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
      shouldExtractLiteralValuesFromEnum: true,
    },
  },

  viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
        },
      },
      plugins: [svgr({include: '**/*.svg'})],
    });
  },
};

export default config;
