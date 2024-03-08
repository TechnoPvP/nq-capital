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
      MuiSwitch: {
        defaultProps: {
          disableRipple: true,
          focusVisibleClassName: '.Mui-focusVisible',
        },
        styleOverrides: {
          root: ({ theme }) => ({
            width: 42,
            height: 26,
            padding: 0,
            '& .MuiSwitch-switchBase': {
              padding: 0,
              margin: 2,
              transitionDuration: '300ms',
              '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                  backgroundColor:
                    theme.palette.mode === 'dark' ? '#2ECA45' : '#30A46C',
                  opacity: 1,
                  border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                  opacity: 0.5,
                },
              },
              '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
              },
              '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
              },
            },
            '& .MuiSwitch-thumb': {
              boxSizing: 'border-box',
              width: 22,
              height: 22,
            },
            '& .MuiSwitch-track': {
              borderRadius: 26 / 2,
              backgroundColor:
                theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
              opacity: 1,
              transition: theme.transitions.create(['background-color'], {
                duration: 500,
              }),
            },
          }),
        },
      },
      MuiSkeleton: {
        defaultProps: {
          animation: 'wave',
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: ({ theme }) => ({
            '& .MuiTab-root': {
              paddingLeft: 0,
              paddingRight: 0,
              minWidth: 'fit-content',
              width: 'fit-content',
              textTransform: 'none',
              fontSize: '14px',
              fontWeight: '500',
              color: '#BBBBBB',
            },
            '& .MuiTabs-flexContainer': {
              gap: 16,
            },
            '& .Mui-selected': {
              color: theme.palette.primary.main,
            },
          }),
        },
      },
      MuiTab: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiPopover: {
        styleOverrides: {
          root: () => ({
            '& .MuiPopover-paper': {
              backgroundColor: '#202020',
              padding: '4px',
            },
            '& .MuiPaper-root': {
              borderRadius: '12px !important',
            },
            '& .MuiBackdrop-root': {
              background: 'transparent !important',
            },
          }),
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: () => ({
            color: '#F1F1F1',
            borderRadius: '8px',
            fontSize: '13px',
            lineHeight: '16px',
            padding: '8px',
            minWidth: '140px',
            boxShadow:
              '0px 16px 32px -12px #20202040, 0px 1px 2px 0px #2020200A, 0px 0px 0px 1px #20202014',
            '&:hover': {
              backgroundColor: '#FFFFFF1B',
            },
          }),
        },
      },
      MuiBackdrop: {
        styleOverrides: {
          root: () => ({
            background: '#00000044',
          }),
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
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
        defaultProps: {
          size: 'small',
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
