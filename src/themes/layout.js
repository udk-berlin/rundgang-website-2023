import { baseLTheme, baseMTheme } from "@/themes/theme";

export const layoutBreakpoints = {
  m: 900,
  s: 400,
};

export const layoutLTheme = {
  ...baseLTheme,
  localization: {
    fontSize: '1rem',
  },
  footer: {
    height: '2.2rem',
    infoPages: {
      gridTemplateColumns: "1fr 1fr 1fr",
    }
  },
};

export const layoutMTheme = {
  ...baseMTheme,
  localization: {
    fontSize: '1rem',
  },
  footer: {
    height: '2.2rem',
    infoPages: {
      gridTemplateColumns: "1fr",
    }
  }
};
