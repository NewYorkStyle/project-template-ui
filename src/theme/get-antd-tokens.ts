import type {ThemeConfig} from 'antd';

import {designTokens, type TColorsPalette, layoutTokens} from './design-tokens';

export const getAntdThemeConfig = (
  palette: TColorsPalette = designTokens
): ThemeConfig => {
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
        headerPadding: layoutTokens.spacing.md,
        triggerBg: 'transparent',
      },
      Select: {
        optionSelectedBg: palette.accentPrimary,
        optionSelectedFontWeight: 'normal',
      },
      Typography: {
        fontSize: layoutTokens.textSize.md,
        fontSizeHeading1: layoutTokens.textSize.xl,
      },
    },
    token: {
      borderRadius: layoutTokens.borderRadius.md,
      colorBgBase: palette.backgroundPrimary,
      colorBgContainer: palette.backgroundSecondary,
      colorTextBase: palette.textPrimary,
      colorTextPlaceholder: palette.textSecondary,
      fontFamily:
        "'Franklin Gothic Medium', 'Arial Narrow',\n  Arial,\n  sans-serif;",
      fontSize: layoutTokens.textSize.md,
    },
  };
};
