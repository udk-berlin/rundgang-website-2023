export const breakpoints = {
  m: 1660,
  s: 800,
};

export const fontSizes = {
  l: {
    small: "0.7rem",
    medium: "1.4rem",
    large: "2.5rem",
  },
  m: {
    small: "0.7rem",
    medium: "0.8rem",
    large: "1.0rem",
  },
};

export const fontWeights = {
  l: {
    small: 500,
    medium: 600,
  },
  m: {
    small: 500,
    medium: 600,
  },
};

export const colors = {
  pink: "#d1acd0",
  pinkLight: "#ebdcea",
  pinkTransparent: "rgba(209, 172, 208, 0.4)",
  green: "#1a3f2b",
  greenLight: "#a2b1a9",
  greenTransparent: "rgba(26, 63, 43, 0.4)",
  white: "white",
  gray: "rgb(52, 52, 52)",
  grayLight: "rgb(215, 215, 215)",
  black: "black",
  blackTransparent: "rgba(1, 1, 1, 0.8)",
};

export const baseLTheme = {
  breakpoints: {
    m: `(max-width: ${breakpoints.m}px)`,
  },
  colors: colors,
  borderWidth: "2px",
  border: "2px solid black",
  fontSizes: fontSizes.l,
  fontWeights: fontWeights.l,
  box: {
    height: "36px",
    padding: "0.2rem 0.4rem",
  },
};

export const baseMTheme = {
  breakpoints: {
    m: `(max-width: ${breakpoints.m}px)`,
  },
  colors: colors,
  borderWidth: "2px",
  border: "2px solid black",
  fontSizes: fontSizes.m,
  fontWeights: fontWeights.m,
  box: {
    height: "36px",
    padding: "0.2rem 0.4rem",
  },
};
