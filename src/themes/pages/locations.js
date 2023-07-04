import {baseLTheme, baseMTheme, fontSizes} from "@/themes/theme";
import {layoutLTheme, layoutMTheme} from "@/themes/layout";

export const breakpoints = {
  m: '900'
}

const height =  {
  l: `calc(100vh - ${layoutLTheme.footer.height} - ${layoutLTheme.header.bar.height} - ${layoutLTheme.header.filter.bar.height} - 2 * ${baseLTheme.borderWidth})`,
  m: `calc(100vh - ${layoutMTheme.footer.height} - ${layoutMTheme.header.bar.height} - ${layoutMTheme.header.filter.bar.height} - 2 * ${layoutMTheme.borderWidth})`,
}

const top = {
  l: `calc(${layoutLTheme.header.bar.height} + ${layoutLTheme.header.filter.bar.height} + 2 * ${baseLTheme.borderWidth})`,
  m: `calc(${layoutMTheme.header.bar.height} + ${layoutMTheme.header.filter.bar.height} + 2 * ${baseMTheme.borderWidth})`
}

const heightShrinkOnSelectedLocation = {
  l: '1',
  m: '2'
}

export const locationsLTheme = {
  ...baseLTheme,
  id: 'l',
  height: height.l,
  map: {
    height: height.l,
    heightShrinkOnSelectedLocation: heightShrinkOnSelectedLocation.l
  },
  groundPlan: {
    height: layoutLTheme.footer.gridTemplateColumn1,
    position: 'absolute',
    top: top.l,
    gridTemplateColumns: `${layoutLTheme.footer.gridTemplateColumn1} ${layoutLTheme.footer.gridTemplateColumn2} ${layoutLTheme.footer.gridTemplateColumn3}`,
    info: {
      height: `calc(${height.l} - ${layoutLTheme.footer.gridTemplateColumn1})`,
    },
    content: {
      height: '100%',
      overflow: 'hidden',
    },
    image: {
      height: layoutLTheme.footer.gridTemplateColumn1,
      border: '0',
    },
    rooms: {
      overflow: 'scroll',
    }
  },
  program: {
    height: height.l,
    width: '',
    position: 'absolute',
    top: top.l,
    left: 0,
    padding: '0.75rem',
    gridTemplateColumns: `${layoutLTheme.footer.gridTemplateColumn1} ${layoutLTheme.footer.gridTemplateColumn2} ${layoutLTheme.footer.gridTemplateColumn3}`,
    borderLeft: baseLTheme.border,
    project: {
      borderBottom: '0',
    }
  },
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
    image: {
      height: 'auto',
      width: '100%'
    },

    placeholder: {
      height: "100%",
    },
  },
};

export const locationsMTheme = {
  ...baseMTheme,
  id: 'm',
  height: height.m,
  map: {
    height: height.m,
    heightShrinkOnSelectedLocation: heightShrinkOnSelectedLocation.m
  },
  groundPlan: {
    height: ``,
    position: '',
    top: '',
    gridTemplateColumns: '',
    info: {
      height: ``,
    },
    content: {
      height: ``,
      overflow: 'none',
    },
    image: {
      height: `calc(${height.m} - ${height.m} / ${heightShrinkOnSelectedLocation.m} - 12vh)`,
      border: baseMTheme.border,
    },
    rooms: {
      overflow: 'none',
    }
  },
  program: {
    height: 'fit-content',
    width: '100vw',
    position: '',
    top: '',
    left: '',
    gridTemplateColumns: '',
    borderLeft: '0',
    project: {
      borderBottom: baseMTheme.border,
    }
  },
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
    image: {
      height: 'auto',
      width: '100%'
    },

    placeholder: {
      height: "100%",
    },
  },
};