import * as stylex from '@stylexjs/stylex';

const DARK = '@media (prefers-color-scheme: dark)';

export const colors = stylex.defineVars({
    primaryText: {default: 'black', [DARK]: 'white'},
    secondaryText: {default: '#333', [DARK]: '#ccc'},
    accent: {default: 'blue', [DARK]: 'lightblue'},
    background: {default: 'red', [DARK]: 'blue'},
    lineColor: {default: 'gray', [DARK]: 'lightgray'},
  });

export const spacing = stylex.defineVars({
    none: '0px',
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '20px',
    xl: '32px',
    xxl: '48px',
    xxxl: '96px',
  });

