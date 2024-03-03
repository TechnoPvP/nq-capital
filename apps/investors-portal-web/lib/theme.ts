import { Theme, ThemeOptions, createTheme } from '@mui/material/styles';
import React from 'react';

// thin: 100
// extraLight: 200
// light: 300
// regular: 400
// medium: 500
// semiBold: 600
// bold: 700
// extraBold: 800
// black: 900
// 16px => 1rem

declare module '@mui/material/styles' {
  interface Theme {
    common: {
      line: React.CSSProperties['color'];
      inputBackground: React.CSSProperties['color'];
      background: React.CSSProperties['color'];
      offWhite: React.CSSProperties['color'];
      titleActive: React.CSSProperties['color'];
      body: React.CSSProperties['color'];
      placeholder: React.CSSProperties['color'];
    };
  }
  interface ThemeOptions {
    common?: {
      line: React.CSSProperties['color'];
      inputBackground: React.CSSProperties['color'];
      background: React.CSSProperties['color'];
      offWhite: React.CSSProperties['color'];
      placeholder: React.CSSProperties['color'];
      body: React.CSSProperties['color'];
      titleActive: React.CSSProperties['color'];
    };
  }
  interface TypographyVariants {
    h1: React.CSSProperties;
    h2: React.CSSProperties;
    h3: React.CSSProperties;
    h4: React.CSSProperties;
    h5: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h1: React.CSSProperties;
    h2: React.CSSProperties;
    h3: React.CSSProperties;
    h4: React.CSSProperties;
    h5: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: true;
    h2: true;
    h3: true;
    h4: true;
    h5: true;
    body1: true;
    body2: true;
    caption: true;
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

export function generateTheme(newTheme?: ThemeOptions): Theme {
  return createTheme({
    palette: {
      ...{
        primary: {
          main: '#000000',
        },
        secondary: {
          main: '#F1F1F1',
        },
        error: {
          main: '#E5484D',
        },
        success: {
          main: '#297C3B',
        },
        warning: {
          main: '#FFBF01',
        },
      },
      ...newTheme?.palette,
    },
    common: {
      ...{
        titleActive: '#333333',
        body: '#333333',
        placeholder: '#F0F0F0',
        line: '#F0F0F0',
        inputBackground: '#FCFCFC',
        background: '#FCFCFC',
        offWhite: '#FFFFFF',
      },
      ...newTheme?.common,
    },
    typography: {
      ...{
        fontFamily: ['Inter', 'sans-serif'].join(','),
        h1: {
          fontSize: '30px',
          lineHeight: '36px',
          letterSpacing: '-0.72px',
          paddingBottom: '10px',
          fontWeight: 700,
          color: 'var(--titleActive)',
        },
        h2: {
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '28px',
          letterSpacing: '-0.72px',
          paddingBottom: '10px',
        },
        h3: {
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '24px',
          letterSpacing: '-0.42px',
          paddingBottom: '10px',
        },
        h4: {
          fontWeight: 600,
          fontSize: '18px',
          lineHeight: '20px',
          letterSpacing: '-0.42px',
          paddingBottom: '10px',
        },
        h5: {
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '20px',
          letterSpacing: '-0.42px',
          paddingBottom: '10px',
        },
        body1: {
          fontSize: '14px',
          fontWeight: 500,
          color: '#333333',
        },
        body2: {
          fontSize: '12px',
          fontWeight: 500,
        },
        caption: {
          fontSize: '0.75rem',
          fontWeight: 300,
        },
      },
      ...newTheme?.typography,
    },
    breakpoints: {
      values: {
        ...{
          mobile: 0,
          tablet: 744,
          laptop: 992,
          desktop: 1200,
        },
        ...newTheme?.breakpoints?.values,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: '12px',
            textTransform: 'none',
            fontWeight: 'var(--semiBold)',
            lineHeight: '14px',
            '&.MuiButton-sizeSmall': {
              fontSize: '12px',
              lineHeight: '12px',
              padding: '12px',
            },
            '&.MuiButton-sizeMedium': { padding: '12px 16px' },
            '&.MuiButton-sizeLarge': { padding: '12px 20px' },
            '&.MuiButton-colorInherit.MuiButton-outlined ': {
              border: `1px solid ${theme.common.line}`,
              color: theme.common.body,
            },
          }),
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: ({ theme }) => ({
            // top: '-8px !important',
          }),
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: '8px',
            background: theme.common.offWhite,
            '& .MuiOutlinedInput-notchedOutline': {
              border: `1px solid ${theme.common.line}`,
            },
          }),
        },
      },
      MuiTextField: {
        defaultProps:{
          size:'small'
        },
        styleOverrides: {
          root: ({ theme }) => ({
            background: theme.common.offWhite,
            '& .MuiOutlinedInput-root': {
              border: 'none',
              borderRadius: '12px',
              background: '#F1F1F1',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: `1px solid ${theme.common.line}`,
            },
          }),
        },
      },
      MuiDialog: {
        styleOverrides: {
          root: ({ theme }) => ({
            '& .MuiPaper-root': {
              borderRadius: 0,
              backgroundColor: theme.common.background,
              maxWidth: '55vw',
            },
          }),
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: ({ theme }) => ({
            '&.MuiDialogTitle-root': {
              ...theme.typography.h1,
              paddingBottom: '24px',
              textAlign: 'center',
            },
          }),
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: ({ theme }) => ({
            '&.MuiDialogActions-root': {
              display: 'grid',
              gridAutoFlow: 'column',
              alignItems: 'center',
              columnGap: '8px',
              justifyContent: 'stretch',
              padding: '8px 0',
            },
          }),
        },
      },
      MuiTableContainer: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: '8px',
            border: `1px solid ${theme.common.line}`,
          }),
        },
      },
      MuiMenu: {
        styleOverrides: {
          root: ({ theme }) => ({
            '& .MuiPaper-root': {
              borderRadius: '5px',
              boxShadow: 'none',
              border: `1px solid ${theme.common.line}`,
            },
            '& .MuiList-root': {
              padding: 0,
            },
          }),
        },
      },
    },
  });
}

export const theme = generateTheme();
