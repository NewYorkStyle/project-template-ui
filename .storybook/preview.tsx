import React, {useMemo, useState} from 'react';

import type {Preview} from '@storybook/react-webpack5';
import {Segmented} from 'antd';

import {UiProvider, designTokens, type TDesignTokens} from '../src/theme';

const createThemeTokens = (mode: 'light' | 'dark'): TDesignTokens => {
  if (mode === 'light') {
    return designTokens;
  }

  return {
    ...designTokens,
    colors: {
      textPrimary: '#CBCDD0',
      textSecondary: '#A4A6A8',
      textDisabled: '#7A7C7E',

      backgroundPrimary: '#383535',
      backgroundSecondary: '#4B4948',
      backgroundElevated: '#5A5857',

      borderPrimary: '#545353',
      borderSecondary: '#6A6867',

      accentPrimary: '#4594D1',
      accentHover: '#5AA3DB',
      accentActive: '#2F7AB8',
    },
  };
};

const ThemeWrapper = (Story: React.ComponentType) => {
  const [mode, setMode] = useState<'dark' | 'light'>(() => {
    const saved =
      typeof window !== 'undefined'
        ? window.localStorage.getItem('sb-theme')
        : null;
    return saved === 'light' || saved === 'dark' ? saved : 'dark';
  });

  const handleChange = (value: 'dark' | 'light') => {
    setMode(value);
    try {
      window.localStorage.setItem('sb-theme', value);
    } catch {
      // noop
    }
  };

  const tokens = useMemo(() => createThemeTokens(mode), [mode]);

  return (
    <UiProvider tokens={tokens}>
      <div
        data-theme={mode}
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          minHeight: '85vh',
          minWidth: '95vw',
          padding: '20px',
          background: tokens.colors.backgroundPrimary,
        }}
      >
        <div
          style={{
            left: '30px',
            position: 'fixed',
            top: '30px',
            zIndex: 1000,
          }}
        >
          <Segmented
            shape='round'
            options={[
              {label: 'Light', value: 'light'},
              {label: 'Dark', value: 'dark'},
            ]}
            onChange={(value) => handleChange(value as 'dark' | 'light')}
            value={mode}
            size='small'
          />
        </div>
        <Story />
      </div>
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
