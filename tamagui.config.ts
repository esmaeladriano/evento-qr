import { createTamagui, createTokens, createTheme } from 'tamagui';
import { createInterFont } from '@tamagui/font-inter';

// Configuração de cores
export const tokens = createTokens({
  color: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#4A90E2',
    background: '#FFFFFF',
    cardBackground: '#F8F9FA',
    text: '#000000',
    textSecondary: '#6C757D',
  },
  space: {
    $0: 0,
    '$0.25': 2,
    '$0.5': 4,
    '$0.75': 8,
    '$1': 12,
    '$1.5': 16,
    '$2': 20,
    '$2.5': 24,
    '$3': 28,
    '$4': 32,
    '$5': 40,
    '$6': 48,
    '$7': 56,
    '$8': 64,
    '$9': 80,
    '$10': 96,
    '$11': 128,
  },
  size: {
    $0: 0,
    '$0.25': 2,
    '$0.5': 4,
    '$0.75': 8,
    '$1': 12,
    '$1.5': 16,
    '$2': 20,
    '$2.5': 24,
    '$3': 28,
    '$4': 32,
    '$5': 40,
    '$6': 48,
    '$7': 56,
    '$8': 64,
    '$9': 80,
    '$10': 96,
    '$11': 128,
  },
  radius: {
    $0: 0,
    '$0.5': 2,
    '$1': 4,
    '$1.5': 6,
    '$2': 8,
    '$2.5': 10,
    '$3': 12,
    '$4': 16,
    '$5': 20,
    '$6': 24,
    '$7': 28,
    '$8': 32,
    '$9': 36,
    '$10': 40,
  },
  zIndex: {
    '0': 0,
    '1': 100,
    '2': 200,
    '3': 300,
    '4': 400,
    '5': 500,
  },
});

// Configuração do tema
export const lightTheme = createTheme({
  // Propriedades de tema
  background: tokens.color.background,
  backgroundHover: tokens.color.cardBackground,
  backgroundPress: tokens.color.cardBackground,
  backgroundFocus: tokens.color.cardBackground,
  color: tokens.color.text,
  colorHover: tokens.color.text,
  borderColor: tokens.color.cardBackground,
  borderColorHover: tokens.color.primary,
  shadowColor: tokens.color.text,
  shadowColorHover: tokens.color.text,
  
  // Cores personalizadas
  primary: tokens.color.primary,
  cardBackground: tokens.color.cardBackground,
  textSecondary: tokens.color.textSecondary,
});

// Configuração das fontes
const headingFont = createInterFont();
const bodyFont = createInterFont();

// Configuração do Tamagui
export const config = createTamagui({
  defaultTheme: 'light',
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  themes: {
    light: lightTheme,
  },
  tokens,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
});

// Tipagem para o Tamagui
export type AppConfig = typeof config;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
