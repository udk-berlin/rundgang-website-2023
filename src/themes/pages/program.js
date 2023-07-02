import { baseLTheme, baseMTheme, fontSizes } from "@/themes/theme";

export const programLTheme = {
  ...baseLTheme,
  MASONRY_COLUMNS: 4,
  MASONRY_GUTTER: "0.75rem",
  title: {
    fontSize: fontSizes.m.large,
  },
};

export const programMTheme = {
  ...baseMTheme,
  MASONRY_COLUMNS: 2,
  MASONRY_GUTTER: "0.75rem",
  title: {
    fontSize: fontSizes.m.large,
  },
};

export const programSTheme = {
  ...baseMTheme,
  MASONRY_COLUMNS: 1,
  MASONRY_GUTTER: "0.75rem",
  title: {
    fontSize: fontSizes.l.medium,
  },
};
