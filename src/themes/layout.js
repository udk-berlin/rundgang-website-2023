import { baseLTheme, baseMTheme } from "@/themes/theme";

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
  localization: {
    fontSize: "0.85rem",
    color: "black",
  },
  header: {
    height: `${header.l.bar.height} + ${header.l.filter.bar.height}`,
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
  },
  localization: {
    fontSize: "1.75rem",
  },
};

export const layoutMTheme = {
  ...baseMTheme,
  localization: {
    fontSize: "0.85rem",
    color: "black",
  },
  header: {
    height: `${header.l.bar.height} + ${header.l.filter.bar.height}`,
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
  },
  localization: {
    fontSize: "1.75rem",
  },
};
