import { baseLTheme, baseMTheme, fontSizes } from "@/themes/theme";
import { layoutLTheme, layoutMTheme } from "@/themes/layout";

export const projectBreakpoints = {
  m: 1400,
  s: 800,
};

export const projectLTheme = {
  ...baseLTheme,
  id: 'l',
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
    display: '',
    flexDirection: "",
    height: `calc(100vh - ${layoutLTheme.header.bar.height} - ${layoutLTheme.header.filter.bar.height} - ${layoutLTheme.footer.height})`,
    width: '50vw',
    overflowX: 'hidden',
    overflowY: 'scroll',
    image: {
      height: 'auto',
      width: '50vw'
    },
    placeholder: {
      height: "100vw",
    },
    audio: {
      width: '50vw'
    },
    video: {
      height: "",
      width: '50vw',
      ratio: 1.777777777,
    }
  },
  text: {
    heading: fontSizes.l.medium,
  },
};

// export const projectMTheme = {
//   ...baseMTheme,
//   container: {
//     flexDirection: "row",
//   },
//   infoContainer: {
//     padding: "0.75rem",
//   },
//   title: {
//     fontSize: fontSizes.l.medium,
//     sliderIndex: 0,
//   },
//   author: {
//     sliderIndex: 0,
//   },
//   format: {
//     sliderIndex: 1,
//   },
//   carousel: {
//     sliderOffset: 2,
//   },
//
//   media: {
//     display: 'flex',
//     flexDirection: "row",
//     height: '',
//     width: '100vw',
//     overflowX: 'scroll',
//     overflowY: 'hidden',
//     image: {
//       height: `calc(100vh - ${layoutLTheme.header.bar.height} - ${layoutLTheme.header.filter.bar.height} - ${layoutLTheme.footer.height})`,
//       width: ''
//     },
//     audio: {
//       width: ''
//     },
//     video: {
//       ratio: 1.777777777,
//     }
//   },
//   additionalText: {
//     heading: fontSizes.l.medium,
//   },
// };

export const projectSTheme = {
  ...baseMTheme,
  id: 'l',
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
    display: 'flex',
    flexDirection: "row",
    height: 'auto',
    width: '100vw',
    overflowX: 'scroll',
    overflowY: 'hidden',
    image: {
      height: "100vw",
      width: 'auto'
    },
    placeholder: {
      height: "100vw",
    },
    audio: {
      width: '100vw'
    },
    video: {
      height: "100vw",
      width: `calc(${1.777777777} * 50vh)`,
      ratio: 1.777777777,
    }
  },
  text: {
    heading: fontSizes.l.medium,
  },
};
