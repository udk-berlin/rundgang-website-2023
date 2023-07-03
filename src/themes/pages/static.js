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
};

export const staticMTheme = {
  ...baseMTheme,
  container: {
    gridTemplateColumns: "1fr",
  },
  staticTitle: {
    fontSize: "1.2rem",
  },
};
