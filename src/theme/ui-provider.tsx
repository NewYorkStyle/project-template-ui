import {type ReactNode, useMemo} from 'react';

import {ConfigProvider} from 'antd';
import type {Locale} from 'antd/es/locale';
import en_USImport from 'antd/locale/en_US.js';
import ru_RUImport from 'antd/locale/ru_RU.js';

import {designTokens, type TColorsPalette} from './design-tokens';
import {getAntdThemeConfig} from './get-antd-tokens';

/** Локали antd из CJS иногда приходят как `{ default: Locale }` — иначе ломаются Table и Modal.confirm. */
const normalizeAntdLocaleModule = (
  imported: Locale | {default: Locale}
): Locale => {
  if (
    imported &&
    typeof imported === 'object' &&
    'default' in imported &&
    (imported as {default: Locale}).default &&
    typeof (imported as {default: Locale}).default === 'object' &&
    'locale' in (imported as {default: Locale}).default
  ) {
    return (imported as {default: Locale}).default;
  }

  return imported as Locale;
};

const enUS = normalizeAntdLocaleModule(en_USImport);
const ruRU = normalizeAntdLocaleModule(ru_RUImport);

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
    let antdLocale = enUS;

    switch (language) {
      case 'ru':
        antdLocale = ruRU;
        break;
      case 'en':
      default:
        antdLocale = enUS;
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
