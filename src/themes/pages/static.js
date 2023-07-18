import { baseLTheme, baseMTheme } from "@/themes/theme";

export const staticBreakpoints = {
  m: 900,
  s: 400,
};

export const staticLTheme = {
  ...baseLTheme,
  container: {
    gridTemplateColumns: "1fr 7fr",
    padding: '2rem 3vw',
  },
  staticTitle: {
    fontSize: "1rem",
    position: 'fixed',
  },
  accordion: {
    itemWrapper: {
      flexDirection: "row",
    },
    itemContentWrapper: {
      gridTemplateColumns: "min-content 1fr",
    },
    itemContentLine: {
      margin: "0.7rem 0.5rem",
    },
  },
};

export const staticMTheme = {
  ...baseMTheme,
  container: {
    gridTemplateColumns: "1fr",
    padding: '1rem 3vw 3rem 3vw',
  },
  staticTitle: {
    fontSize: "1.2rem",
    position: 'inline',
  },
  accordion: {
    itemWrapper: {
      flexDirection: "column",
    },
    itemContentWrapper: {
      gridTemplateColumns: "1fr",
    },
    itemContentLine: {
      margin: "1rem 0",
    },
  },
};
