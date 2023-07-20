import { baseLTheme, baseMTheme, fontSizes } from "@/themes/theme";
import {layoutLTheme, layoutMTheme} from "@/themes/layout";

const height =  {
  l: `calc(100vh - ${layoutLTheme.footer.height} - ${layoutLTheme.header.height} + ${baseLTheme.borderWidth})`,
  m: `calc(100vh - ${layoutMTheme.footer.height} - ${layoutMTheme.header.height} + ${baseMTheme.borderWidth})`,
}
export const programLTheme = {
  ...baseLTheme,
  id: 'l',
  MASONRY_COLUMNS: 4,
  MASONRY_GUTTER: "0.75rem",
  height: height.l,
  padding: "0.75rem",
  paddingBottom: "0.75rem",
  title: {
    fontSize: fontSizes.m.large,
    sliderIndex: 1,
  },
  author: {
    sliderIndex: 2,
  },
  format: {
    sliderIndex: 3,
  },
  carousel: {
    sliderOffset: 4,
  },
  media: {
    thumbnail: {
      height: 'auto',
      width: '100%'
    },
    image: {
      height: 'auto',
      width: '100%'
    },
    placeholder: {
      height: "100%",
      width: "auto",
    },
  },
  dropCap: {
    before: {
      marginTop: "-0.2em"
    }
  }
};

export const programMTheme = {
  ...baseMTheme,
  id: 'm',
  MASONRY_COLUMNS: 2,
  MASONRY_GUTTER: "0.75rem",
  height: height.m,
  padding: "0.75rem",
  paddingBottom: `calc(${layoutLTheme.footer.height} + 0.75rem + ${baseMTheme.borderWidth})`,
  title: {
    fontSize: fontSizes.m.large,
    sliderIndex: 1,
  },
  author: {
    sliderIndex: 2,
  },
  format: {
    sliderIndex: 3,
  },
  carousel: {
    sliderOffset: 4,
  },
  media: {
    thumbnail: {
      height: 'auto',
      width: '100%'
    },
    image: {
      height: 'auto',
      width: '100%'
    },
    placeholder: {
      height: "100%",
      width: "auto",
    },
  },
  dropCap: {
    before: {
      marginTop: "-0.2em"
    }
  }
};

export const programSTheme = {
  ...baseMTheme,
  id: 's',
  MASONRY_COLUMNS: 1,
  MASONRY_GUTTER: "0.75rem",
  height: height.m,
  padding: "0.75rem",
  paddingBottom: `calc(${layoutLTheme.footer.height} + 0.75rem + ${baseMTheme.borderWidth})`,
  title: {
    fontSize: fontSizes.l.medium,
    sliderIndex: 1,
  },
  author: {
    sliderIndex: 2,
  },
  format: {
    sliderIndex: 3,
  },
  carousel: {
    sliderOffset: 4,
  },
  media: {
    thumbnail: {
      height: 'auto',
      width: '100%'
    },
    image: {
      height: 'auto',
      width: '100%'
    },
    placeholder: {
      height: "100%",
      width: "auto",
    },
  },
  dropCap: {
    before: {
      marginTop: "-0.16em"
    }
  }
};
