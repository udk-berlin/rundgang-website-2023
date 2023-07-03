import { baseLTheme, baseMTheme } from "@/themes/theme";

export const staticBreakpoints = {
  m: 900,
  s: 400,
};

export const staticLTheme = {
  ...baseLTheme,
  container: {
    gridTemplateColumns: "1fr 7fr",
  },
  staticTitle: {
    fontSize: "1rem",
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
  },
  staticTitle: {
    fontSize: "1.2rem",
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
