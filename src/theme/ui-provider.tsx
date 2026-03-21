import {type ReactNode, useMemo} from 'react';

import {ConfigProvider} from 'antd';
import en_US from 'antd/locale/en_US.js';
import ru_RU from 'antd/locale/ru_RU.js';

import {designTokens, type TColorsPalette} from './design-tokens';
import {getAntdThemeConfig} from './get-antd-tokens';

export type TUiProviderProps = {
  children: ReactNode;
  tokens?: Partial<TColorsPalette>;
  language?: 'ru' | 'en';
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

export const UiProvider = ({children, language, tokens}: TUiProviderProps) => {
  const mergedPalette = useMemo(() => mergeColorsPalette(tokens), [tokens]);

  const antdTheme = useMemo(
    () => getAntdThemeConfig(mergedPalette),
    [mergedPalette]
  );
  const antLocale = useMemo(() => {
    let antdLocale = en_US;

    switch (language) {
      case 'ru':
        antdLocale = ru_RU;
        break;
      case 'en':
      default:
        antdLocale = en_US;
        break;
    }

    return antdLocale;
  }, [language]);

  return (
    <ConfigProvider theme={antdTheme} locale={antLocale}>
      {children}
    </ConfigProvider>
  );
};
