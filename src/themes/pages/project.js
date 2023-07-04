import { baseLTheme, baseMTheme, fontSizes } from "@/themes/theme";
import { layoutLTheme, layoutMTheme } from "@/themes/layout";

export const projectBreakpoints = {
  m: 1400,
  s: 800,
};

export const projectLTheme = {
  ...baseLTheme,
  container: {
    flexDirection: "row",
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
  media: {
    height: `calc(100vh - ${layoutLTheme.header.bar.height} - ${layoutLTheme.header.filter.bar.height} - ${layoutLTheme.footer.height})`,
    width: '50vw',
    overflowX: 'hidden',
    overflowY: 'scroll',
    flexDirection: "row",
    image: {
      height: 'auto',
      width: '50vw'
    },
    audio: {
      width: '50vw'
    },
    video: {
      ratio: 1.777777777,
    }
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

  media: {
    height: '',
    width: '100vw',
    overflowX: 'scroll',
    overflowY: 'hidden',
    flexDirection: "row",
    image: {
      height: `calc(100vh - ${layoutLTheme.header.bar.height} - ${layoutLTheme.header.filter.bar.height} - ${layoutLTheme.footer.height})`,
      width: ''
    },
    audio: {
      width: ''
    },
    video: {
      ratio: 1.777777777,
    }
  },
  additionalText: {
    heading: fontSizes.l.medium,
  },
};

export const projectSTheme = {
  container: {
    flexDirection: "column",
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
  media: {
    height: '',
    width: '100vw',
    overflowX: 'scroll',
    overflowY: 'hidden',
    flexDirection: "row",
    image: {
      height: "100vw",
      width: ''
    },
    audio: {
      width: ''
    },
    video: {
      ratio: 1.777777777,
    }
  },
  additionalText: {
    heading: fontSizes.l.medium,
  },
};
