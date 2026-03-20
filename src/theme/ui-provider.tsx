import {type ReactNode, useMemo} from 'react';

import {ConfigProvider} from 'antd';

import {designTokens, type TColorsPalette} from './design-tokens';
import {getAntdThemeConfig} from './get-antd-tokens';

export type TUiProviderProps = {
  children: ReactNode;
  tokens?: Partial<TColorsPalette>;
};

const mergeColorsPalette = (
  overrides?: Partial<TColorsPalette>
): TColorsPalette => {
  if (!overrides) {
    return designTokens;
  }

  return {
    ...designTokens,
    ...overrides,
  };
};

export const UiProvider = ({children, tokens}: TUiProviderProps) => {
  const mergedPalette = useMemo(() => mergeColorsPalette(tokens), [tokens]);

  const antdTheme = useMemo(
    () => getAntdThemeConfig(mergedPalette),
    [mergedPalette]
  );

  return <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>;
};
