import type {ThemeConfig} from 'antd';

import {designTokens, type TDesignTokens} from './design-tokens';

export const getAntdThemeConfig = (
  tokens: TDesignTokens = designTokens
): ThemeConfig => {
  const palette = tokens.colors;

  return {
    components: {
      Button: {
        dangerShadow: 'none',
        defaultShadow: 'none',
        primaryShadow: 'none',
      },
      Divider: {
        colorSplit: palette.borderPrimary,
      },
      Layout: {
        headerBg: palette.backgroundPrimary,
        headerPadding: tokens.spacing.md,
        triggerBg: 'transparent',
      },
      Select: {
        optionSelectedBg: palette.accentPrimary,
        optionSelectedFontWeight: 'normal',
      },
      Typography: {
        fontSize: tokens.textSize.md,
        fontSizeHeading1: tokens.textSize.xl,
      },
    },
    token: {
      borderRadius: tokens.borderRadius.md,
      colorBgBase: palette.backgroundPrimary,
      colorBgContainer: palette.backgroundSecondary,
      colorTextBase: palette.textPrimary,
      colorTextPlaceholder: palette.textSecondary,
      fontFamily:
        "'Franklin Gothic Medium', 'Arial Narrow',\n  Arial,\n  sans-serif;",
      fontSize: tokens.textSize.md,
    },
  };
};
