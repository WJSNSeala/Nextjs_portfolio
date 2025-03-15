import { createGlobalTheme, createTheme, createThemeContract } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

// 기본 색상 팔레트 정의
export const colorPalette = {
  // 로우 라이트 컨셉을 위한 다크 테마 색상
  darkBg: '#0a0a12',
  darkBgAlt: '#121220',
  darkElevated: '#1a1a28',

  // 그라데이션 컬러
  gradientBlue: 'linear-gradient(135deg, #2C3E50, #4CA1AF)',
  gradientPurple: 'linear-gradient(135deg, #667eea, #764ba2)',
  gradientCyan: 'linear-gradient(135deg, #2193b0, #6dd5ed)',

  // 강조 색상
  accentBlue: '#4361ee',
  accentPurple: '#7209b7',
  accentCyan: '#4cc9f0',
  accentPink: '#f72585',
  accentOrange: '#fb8500',

  // 글래스모피즘 효과를 위한 투명도 색상
  glassLight: 'rgba(255, 255, 255, 0.1)',
  glassDark: 'rgba(0, 0, 0, 0.1)',

  // 텍스트 색상
  textPrimary: '#ffffff',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  textTertiary: 'rgba(255, 255, 255, 0.5)',
};

// 반응형 브레이크포인트
export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
};

// 간격 및 스페이싱
export const spacing = {
  none: '0',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
  xxxl: '64px',
};

// 그리드 설정
export const grid = {
  columns: 12,
  gutter: spacing.md,
  margin: spacing.lg,
};

// 폰트 설정
export const typography = {
  fontFamily: {
    primary: "'Inter', sans-serif",
    display: "'Space Grotesk', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    md: '1rem',       // 16px
    lg: '1.25rem',    // 20px
    xl: '1.5rem',     // 24px
    xxl: '2rem',      // 32px
    xxxl: '3rem',     // 48px
    display: '4rem',  // 64px
    huge: '6rem',     // 96px
  },
  lineHeight: {
    tight: '1.2',
    normal: '1.5',
    loose: '1.8',
  },
};

// 테두리 설정
export const borders = {
  radius: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
    pill: '9999px',
    circle: '50%',
  },
  width: {
    none: '0',
    thin: '1px',
    thick: '2px',
    thicker: '4px',
  },
};

// 애니메이션 설정
export const animations = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '1000ms',
  },
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
};

// 그림자 설정
export const shadows = {
  none: 'none',
  sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
  inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
};

// 글래스모피즘 설정
export const glass = {
  light: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  dark: {
    background: 'rgba(10, 10, 18, 0.8)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
};

// 배경 효과
export const backgroundEffects = {
  noise: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG5SURBVHgB7ZnRkYMgEEX5SQEpISVYgpSQElKCJaQES0gJlpASLCElkBtmxjg6usCCo5l7ZzKjruDD5bFg27JlS9RMXb7gWupBQ8W9wM/IZ+ryrVC5TH8FvOSLUGh0sHG4k58RmgdBO+lbQMsC9uIRooWnTw9ybK4AaBskJ/0gaMk2SMqB3uRnhIuJUDzZ5OojcWFYZF5kz78v0W8e0nBjgWFILzLmdP1ivi4UCixHYBvxWv7UrDGzCgbOFYYx7ZN2Hw5A0jFmXmFQRpC0m2c0EQUDxw/sYiXrxDMEiSUTwzT2fINxvMDwgn/vUwQZ7URWhjzXhJYBJz8jmjDGa2Az5AizHiW0eA1shsB3m9We5UwwTL/08IU0YoUzFTBDLDCMMYfS8MAKGDjdWcZgOsU2EgNGhUFr4GzECoPWwNVI07k2jQFrgTFuhjwHhHkPhMH/2WaVG4xoDYQY0sBoCG1PZBMjCBP1r4VQI4oYX6OuBapScC1kqyGUT7Q9kcUIcpE5HvTZiMu9PUdiDiNb7Pc2HSP9Z3+3XgVG3MKcI+12wFPkcV1RYO6OcN85z3xJSQZ5NJgtW7Z8AOeFoKXhx05xAAAAAElFTkSuQmCC')",
};

// 테마 계약 정의
const themeContract = createThemeContract({
  colors: {
    background: null,
    backgroundAlt: null,
    elevated: null,
    primaryAccent: null,
    secondaryAccent: null,
    textPrimary: null,
    textSecondary: null,
  },
  shadows: {
    default: null,
    hover: null,
  },
  glass: {
    background: null,
    border: null,
  },
});

// 다크 테마 정의
export const darkTheme = createTheme(themeContract, {
  colors: {
    background: colorPalette.darkBg,
    backgroundAlt: colorPalette.darkBgAlt,
    elevated: colorPalette.darkElevated,
    primaryAccent: colorPalette.accentBlue,
    secondaryAccent: colorPalette.accentPurple,
    textPrimary: colorPalette.textPrimary,
    textSecondary: colorPalette.textSecondary,
  },
  shadows: {
    default: shadows.md,
    hover: shadows.lg,
  },
  glass: {
    background: glass.dark.background,
    border: glass.dark.border,
  },
});

// 스프링클 속성 정의 (utility 클래스)
const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': `screen and (min-width: ${breakpoints.tablet})` },
    desktop: { '@media': `screen and (min-width: ${breakpoints.desktop})` },
    wide: { '@media': `screen and (min-width: ${breakpoints.wide})` },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline', 'grid', 'inline-flex'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    paddingTop: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    marginTop: spacing,
    marginBottom: spacing,
    marginLeft: spacing,
    marginRight: spacing,
    gap: spacing,
    fontSize: typography.fontSize,
    fontWeight: typography.fontWeight,
    lineHeight: typography.lineHeight,
    textAlign: ['left', 'center', 'right'],
    width: ['auto', '100%', '50%', '33%', '25%', '20%'],
    height: ['auto', '100%', '50vh', '100vh'],
    borderRadius: borders.radius,
    position: ['relative', 'absolute', 'fixed', 'sticky'],
    top: [0],
    bottom: [0],
    left: [0],
    right: [0],
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
});

// 색상 속성 정의
const colorProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: '&:hover' },
    focus: { selector: '&:focus' },
    active: { selector: '&:active' },
  },
  defaultCondition: 'default',
  properties: {
    color: { ...colorPalette, currentColor: 'currentColor' },
    backgroundColor: colorPalette,
    borderColor: { ...colorPalette, transparent: 'transparent' },
  },
});

// 스프링클 생성 (utility 함수)
export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties
);

// 글로벌 CSS 변수 생성
export const vars = createGlobalTheme(':root', {
  colors: colorPalette,
  spacing,
  typography,
  borders,
  animations,
  shadows,
});