import { baseLTheme, baseMTheme, fontSizes } from "@/themes/theme";

export const projectBreakpoints = {
  m: 1400,
  s: 800,
};

export const projectLTheme = {
  ...baseLTheme,
  container: {
    flexDirection: "row",
  },
  imageContainer: {
    flexDirection: "column",
    height:
      "calc(100vh - var(--layout-header-search-container-height) - calc(var(--layout-header-bar-container-height) * 2))",
  },
  infoContainer: {
    padding: "1rem",
  },
  title: {
    fontSize: fontSizes.l.large,
    sliderIndex: 0,
  },
  author: {
    sliderIndex: 0,
  },
  format: {
    sliderIndex: 1,
  },
  carousel: {
    sliderOffset: 2,
  },
  additionalMedia: {
    container: {
      flexDirection: "column",
      paddingTop: "0.5rem",
    },
  },
  additionalText: {
    heading: fontSizes.l.medium,
  },
};

export const projectMTheme = {
  ...baseMTheme,
  container: {
    flexDirection: "row",
  },
  imageContainer: {
    flexDirection: "column",
    height:
      "calc(100vh - var(--layout-header-search-container-height) - calc(var(--layout-header-bar-container-height) * 2))",
  },
  infoContainer: {
    padding: "0.75rem",
  },
  title: {
    fontSize: fontSizes.l.medium,
    sliderIndex: 0,
  },
  author: {
    sliderIndex: 0,
  },
  format: {
    sliderIndex: 1,
  },
  carousel: {
    sliderOffset: 2,
  },
  additionalMedia: {
    container: {
      flexDirection: "column",
      paddingTop: "0.5rem",
    },
  },
  additionalText: {
    heading: fontSizes.l.medium,
  },
};

export const projectSTheme = {
  container: {
    flexDirection: "column",
  },
  imageContainer: {
    flexDirection: "row",
    height: "100vw",
  },
  infoContainer: {
    padding: "1rem",
  },
  title: {
    fontSize: fontSizes.l.medium,
    sliderIndex: 0,
  },
  author: {
    sliderIndex: 0,
  },
  format: {
    sliderIndex: 1,
  },
  carousel: {
    sliderOffset: 2,
  },
  additionalMedia: {
    container: {
      flexDirection: "row",
      paddingTop: "0",
    },
  },
  additionalText: {
    heading: fontSizes.l.medium,
  },
};
