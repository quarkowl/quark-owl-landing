import { merge, ThemeUIStyleObject } from 'theme-ui';
import tailwind from '@theme-ui/preset-tailwind';

declare module 'theme-ui' {
  interface Theme {
    footer?: ThemeUIStyleObject;
    texts?: ThemeUIStyleObject;
  }
}

const theme = merge(tailwind, {
  config: {
    initialColorModeName: 'dark',
    useColorSchemeMediaQuery: 'system',
  },
  fonts: {
    body: `'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif`,
    heading: `'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif`,
    monospace: `'JetBrains Mono', 'Fira Code', Menlo, monospace`,
  },
  colors: {
    primary: '#8B5CF6',
    secondary: '#22D3EE',
    text: '#94A3B8',
    heading: '#F1F5F9',
    background: `#080D1E`,
    divider: '#0F1729',
    textMuted: tailwind.colors.gray[5],
    icon_brightest: tailwind.colors.white,
    icon_darker: tailwind.colors.gray[7],
    icon_darkest: tailwind.colors.gray[8],
    icon_red: tailwind.colors.red[5],
    icon_blue: '#22D3EE',
    icon_orange: tailwind.colors.orange[4],
    icon_yellow: tailwind.colors.yellow[4],
    icon_pink: tailwind.colors.pink[4],
    icon_purple: '#8B5CF6',
    icon_green: tailwind.colors.green[4],
    cardBg: `rgba(255,255,255,0.03)`,
    cardBorder: `rgba(255,255,255,0.07)`,
    cardBgHover: `rgba(255,255,255,0.06)`,
    cardBorderHover: `rgba(139,92,246,0.25)`,
    modes: {
      light: {
        text: tailwind.colors.gray[8],
        heading: '#111827',
        primary: '#6D28D9',
        secondary: '#0E7490',
        background: '#F8FAFC',
        divider: tailwind.colors.gray[3],
        textMuted: tailwind.colors.gray[6],
        icon_brightest: tailwind.colors.gray[4],
        icon_darker: tailwind.colors.gray[5],
        icon_darkest: tailwind.colors.gray[7],
        icon_blue: '#0E7490',
        icon_purple: '#6D28D9',
        cardBg: `rgba(0,0,0,0.04)`,
        cardBorder: `rgba(0,0,0,0.12)`,
        cardBgHover: `rgba(0,0,0,0.07)`,
        cardBorderHover: `rgba(109,40,217,0.4)`,
      },
    },
  },
  breakpoints: [`400px`, `600px`, `900px`, `1200px`, `1600px`],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
    medium: 500,
    semibold: 600,
  },
  styles: {
    root: {
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
      color: `text`,
      backgroundColor: `background`,
      WebkitTextSizeAdjust: `100%`,
      fontFamily: `body`,
      a: {
        color: `primary`,
        textDecoration: `none`,
        transition: `all 0.3s ease-in-out`,
        '&:hover': {
          color: `primary`,
          textDecoration: `none`,
        },
      },
      img: {
        borderStyle: `none`,
      },
      pre: {
        fontFamily: `monospace`,
        fontSize: `1em`,
      },
    },
    p: {
      fontSize: [1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      '--baseline-multiplier': 0.179,
      '--x-height-multiplier': 0.35,
      color: `text`,
      fontFamily: `body`,
    },
    blockquote: {
      marginLeft: 0,
      p: {
        fontSize: [2, 3],
        fontWeight: `medium`,
        color: `heading`,
      },
    },
    h1: {
      fontSize: [6, 7, 8],
      mt: 2,
      mb: 3,
      letterSpacing: `-0.04em`,
      color: `heading`,
      fontWeight: 800,
      fontFamily: `heading`,
      lineHeight: 1.05,
    },
    h2: {
      fontSize: [4, 5, 6],
      mt: 2,
      mb: 3,
      color: `heading`,
      fontWeight: 700,
      letterSpacing: `-0.02em`,
      fontFamily: `heading`,
    },
    h3: {
      fontSize: [3, 4, 5],
      mt: 3,
      color: `heading`,
      fontWeight: 600,
      letterSpacing: `-0.01em`,
      fontFamily: `heading`,
    },
    h4: {
      fontSize: [2, 3, 4],
      color: `heading`,
      fontWeight: 600,
      fontFamily: `heading`,
    },
    h5: {
      fontSize: [1, 2, 3],
      color: `heading`,
      fontFamily: `heading`,
    },
    h6: {
      fontSize: 1,
      mb: 2,
      color: `heading`,
      fontFamily: `heading`,
    },
  },
  layout: {
    container: {
      maxWidth: `5xl`,
    },
  },
  buttons: {
    toggle: {
      color: `background`,
      border: `none`,
      backgroundColor: `text`,
      cursor: `pointer`,
      alignSelf: `center`,
      px: 3,
      py: 2,
      ml: 3,
    },
    primary: {
      fontFamily: `body`,
      fontWeight: 600,
      letterSpacing: `0.02em`,
    },
  },
  footer: {
    textAlign: `center`,
    display: `block`,
    position: `absolute`,
    bottom: 0,
    color: `textMuted`,
    px: [2, 3],
    py: [3, 4],
    fontFamily: `body`,
  },
  texts: {
    bigger: {
      p: {
        fontSize: [2, 3, 4],
        fontFamily: `body`,
      },
    },
  },
});

export default theme;
