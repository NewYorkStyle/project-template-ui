import {type ReactNode, useMemo} from 'react';

import {ConfigProvider} from 'antd';

import {designTokens, type TDesignTokens} from './design-tokens';
import {getAntdThemeConfig} from './get-antd-tokens';

export type TUiProviderProps = {
  children: ReactNode;
  tokens?: Partial<TDesignTokens>;
};

const mergeTokens = (overrides?: Partial<TDesignTokens>): TDesignTokens => {
  if (!overrides) {
    return designTokens;
  }

  return {
    colors: {
      ...designTokens.colors,
      ...(overrides.colors ?? {}),
    },
    spacing: {
      ...designTokens.spacing,
      ...(overrides.spacing ?? {}),
    },
    borderRadius: {
      ...designTokens.borderRadius,
      ...(overrides.borderRadius ?? {}),
    },
    textSize: {
      ...designTokens.textSize,
      ...(overrides.textSize ?? {}),
    },
    breakpoints: {
      ...designTokens.breakpoints,
      ...(overrides.breakpoints ?? {}),
    },
  };
};

export const UiProvider = ({children, tokens}: TUiProviderProps) => {
  const mergedTokens = useMemo(() => mergeTokens(tokens), [tokens]);

  const antdTheme = useMemo(
    () => getAntdThemeConfig(mergedTokens),
    [mergedTokens]
  );

  return <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>;
};
