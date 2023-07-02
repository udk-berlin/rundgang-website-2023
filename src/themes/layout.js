import { baseLTheme, baseMTheme, fontSizes } from "@/themes/theme";

export const layoutBreakpoints = {
  m: 900,
  s: 400,
};

export const layoutLTheme = {
  ...baseLTheme,
  footerInfoPages: {
    gridTemplateColumns: "1fr 1fr 1fr",
  },
};

export const layoutMTheme = {
  ...baseMTheme,
  footerInfoPages: {
    gridTemplateColumns: "1fr",
  },
};
