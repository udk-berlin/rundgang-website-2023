import { baseLTheme, baseMTheme, fontSizes } from "@/themes/theme";
import { layoutLTheme, layoutMTheme } from "@/themes/layout";

export const projectBreakpoints = {
  m: 1400,
  s: 800,
};

export const projectLTheme = {
  ...baseLTheme,
  id: "l",
  flexDirection: "row",
  marginBottom: 0,
  info: {
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
    display: "",
    flexDirection: "",
    height: `calc(100vh - ${layoutLTheme.header.height} - ${layoutLTheme.footer.height})`,
    width: "50vw",
    overflowX: "hidden",
    overflowY: "scroll",
    thumbnail: {
      height: "auto",
      width: "50vw",
    },
    image: {
      height: "auto",
      width: "50vw",
    },
    placeholder: {
      height: `calc(100vh - ${layoutLTheme.header.height} - ${layoutLTheme.footer.height})`,
      width: "50vw",
    },
    audio: {
      width: "50vw",
    },
    video: {
      height: "",
      width: "50vw",
      ratio: 1.777777777,
    },
  },
  text: {
    heading: fontSizes.l.medium,
  },
  dropCap: {
    before: {
      marginTop: "-0.2em"
    }
  }
};

export const projectMTheme = {
  ...baseMTheme,
  container: {
    flexDirection: "row",
  },
  info: {
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
    display: "",
    flexDirection: "",
    height: `calc(100vh - ${layoutLTheme.header.height} - ${layoutLTheme.footer.height})`,
    width: "50vw",
    overflowX: "hidden",
    overflowY: "scroll",
    thumbnail: {
      height: "auto",
      width: "50vw",
    },
    image: {
      height: "auto",
      width: "50vw",
    },
    placeholder: {
      height: `calc(100vh - ${layoutLTheme.header.height} - ${layoutLTheme.footer.height})`,
      width: "auto",
    },
    audio: {
      width: "50vw",
    },
    video: {
      height: "",
      width: "50vw",
      ratio: 1.777777777,
    },
  },
  additionalText: {
    heading: fontSizes.l.medium,
  },
  dropCap: {
    before: {
      marginTop: "-0.2em"
    }
  }
};

export const projectSTheme = {
  ...baseMTheme,
  id: "l",
  flexDirection: "column",
  marginBottom: `calc(${layoutMTheme.footer.height} + 1vh)`,
  info: {
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
    display: "flex",
    flexDirection: "row",
    height: "auto",
    width: '',
    overflowX: "scroll",
    overflowY: "hidden",
    thumbnail: {
      height: "auto",
      width: `calc(100vw - 3 * ${baseMTheme.borderWidth})`,
    },
    placeholder: {
      height: "50vh",
      width: `calc(100vw - 3 * ${baseMTheme.borderWidth})`,
    },
    audio: {
      width: `calc(100vw - 3 * ${baseMTheme.borderWidth})`,
    },
    video: {
      height: "100vw",
      width: `calc(${1.777777777} * calc(100vw - 3 * ${baseMTheme.borderWidth}))`,
      ratio: 1.777777777,
    },
  },
  text: {
    heading: fontSizes.l.medium,
  },
  dropCap: {
    before: {
      marginTop: "-0.16em"
    }
  }
};
