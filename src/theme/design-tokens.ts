export type TColorsPalette = {
  textPrimary: string;
  textSecondary: string;
  textDisabled: string;

  backgroundPrimary: string;
  backgroundSecondary: string;
  backgroundElevated: string;

  borderPrimary: string;
  borderSecondary: string;

  accentPrimary: string;
  accentHover: string;
  accentActive: string;
};

// Базовая палитра (light). Внешний consumer может переопределять только цвета.
export const designTokens: TColorsPalette = {
  textPrimary: '#000000',
  textSecondary: '#6B6B6B',
  textDisabled: '#A4A6A8',

  backgroundPrimary: '#CBCBCB',
  backgroundSecondary: '#D9D9DC',
  backgroundElevated: '#FFFFFF',

  borderPrimary: '#C1C0C0',
  borderSecondary: '#E0E0E0',

  accentPrimary: '#4594D1',
  accentHover: '#5AA3DB',
  accentActive: '#2F7AB8',
};

// Остальные токены (spacing/radius/fontSizes/breakpoints) не должны меняться,
// поэтому они живут отдельно от публичного TColorsPalette.
export const layoutTokens = {
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
  },
  textSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 24,
    xl: 36,
  },
};
