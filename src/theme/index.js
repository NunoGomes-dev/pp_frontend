const space = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
};

const colors = {
  primary: "#DDBA92",
  secondary: "#727272",
  terciary: "#210203",
  primaryLight: "rgba(221, 186, 146, 0.2)",
  title: "#04080F",
  text: "#292929",
  transparent: "transparent",
  black: "#000",
  white: "#FFFFFF",
  light: "#FAFAFA",
};

export const theme = {
  colors,
  fonts: {
    heading: '"Outfit", sans-serif;',
    body: '"Outfit", sans-serif;',
    outfit: '"Outfit", sans-serif;',
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  space: space,
  sizes: {
    ...space,
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  borderRadius: {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  boxShadows: {
    md: "0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12), 0 16px 16px rgba(0,0,0,0.12);",
  },
  components: {
    button: {
      baseStyle: {
        "background-color": `${colors.primary}`,
        color: `${colors.white}`,
        padding: "1rem 2rem",
        "border-radius": "8px",
        border: "none",
      },
      variants: {
        solid: {
          "background-color": `${colors.primary}`,
          color: `${colors.white}`,
          padding: "1rem 2rem",
          "border-radius": "8px",
          border: "none",
        },
        light: {
          "background-color": `${colors.primaryLight}`,
          color: `${colors.primary}`,
          padding: "1rem 2rem",
          "border-radius": "8px",
          border: "none",
        },
        outline: {
          "background-color": `${colors.primaryLight}`,
          color: `${colors.primary}`,
          padding: "1rem 2rem",
          "border-radius": "8px",
          border: `1px solid ${colors.primary}`,
        },
        unstyled: {
          "background-color": "transparent",
          color: `${colors.white}`,
          padding: "0",
          "border-radius": "none",
          border: "none",
        },
      },
    },
    input: {
      baseStyle: `min-width: 300px;
      background: ${colors.light};
      color: ${colors.terciary};
      padding: 1rem;
      border-radius: 8px;
      border: 1px solid #E0E0E0;
      &:hover {
          background: ${colors.white};
      }
      &:focus {
          background: ${colors.white};
          outline: none;
    -webkit-tap-highlight-color: transparent;
      }
      &:active {
        background: ${colors.white};
        -webkit-tap-highlight-color: transparent;
      }
    `,
    },
  },
};
