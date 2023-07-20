import { baseLTheme, baseMTheme, colors } from "@/themes/theme";

export const breakpoints = {
  m: 900,
  s: 400,
};

const header = {
  l: {
    bar: {
      height: "60px",
    },
    filter: {
      bar: {
        height: "34px",
      },
    },
  },
  m: {
    bar: {
      height: "60px",
    },
    filter: {
      bar: {
        height: "34px",
      },
    },
  },
};

export const layoutLTheme = {
  ...baseLTheme,
  id: 'l',
  localization: {
    fontSize: "0.85rem",
    color: "black",
  },
  header: {
    height: `calc(${header.l.bar.height} + ${header.l.filter.bar.height} + 2 * ${baseLTheme.borderWidth})`,
    bar: {
      height: header.l.bar.height,
    },
    filter: {
      bar: {
        height: header.l.filter.bar.height,
      },
    },
  },
  footer: {
    height: "2.2rem",
    gridTemplateColumn1: "25vw",
    gridTemplateColumn2: "1fr",
    gridTemplateColumn3: "25vw",
    infoPages: {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    slider: {
      thumb: {
        color: colors.pink,
        outline: `${baseLTheme.border} !important`
      }
    }
  },
};

export const layoutMTheme = {
  ...baseMTheme,
  id: 'm',
  localization: {
    fontSize: "1.5rem",
    color: "black",
  },
  header: {
    height: `calc(${header.l.bar.height} + ${header.l.filter.bar.height} + 2 * ${baseMTheme.borderWidth})`,
    bar: {
      height: header.l.bar.height,
    },
    filter: {
      bar: {
        height: header.l.filter.bar.height,
      },
    },
  },
  footer: {
    height: "2.2rem",
    gridTemplateColumn1: "25vw",
    gridTemplateColumn2: "1fr",
    gridTemplateColumn3: "25vw",
    infoPages: {
      gridTemplateColumns: "1fr",
    },
    slider: {
      thumb: {
        color: colors.black,
        outline: ''
      }
    }
  },
};
