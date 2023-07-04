import {baseLTheme, baseMTheme, fontSizes} from "@/themes/theme";
import {layoutLTheme, layoutMTheme} from "@/themes/layout";

const height =  {
  l: `calc(100vh - ${layoutLTheme.footer.height} - ${layoutLTheme.header.bar.height} - ${layoutLTheme.header.filter.bar.height} - 2 * ${baseLTheme.borderWidth})`,
  m: `calc(100vh - ${layoutMTheme.footer.height} - ${layoutMTheme.header.bar.height} - ${layoutMTheme.header.filter.bar.height} - 2 * ${layoutMTheme.borderWidth})`,
}

const top = {
  l: `calc(${layoutLTheme.header.bar.height} + ${layoutLTheme.header.filter.bar.height} + 2 * ${baseLTheme.borderWidth})`,
  m: `calc(${layoutMTheme.header.bar.height} + ${layoutMTheme.header.filter.bar.height} + 2 * ${baseMTheme.borderWidth})`
}

export const locationsLTheme = {
  ...baseLTheme,
  height: height.l,
  map: {
    height: height.l
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
    }
  },
  program: {
    height: height.l,
    position: 'absolute',
    top: top.l,
    left: 0,
    padding: '0.75rem',
    gridTemplateColumns: `${layoutLTheme.footer.gridTemplateColumn1} ${layoutLTheme.footer.gridTemplateColumn2} ${layoutLTheme.footer.gridTemplateColumn3}`,
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
};

export const locationsMTheme = {
  ...baseMTheme,
  height: height.l,
  map: {
    height: height.m
  },
  groundPlan: {
    height: 'fit-content',
    position: '',
    top: '',
    gridTemplateColumns: '',
    info: {
      height: `calc(${height.m} - ${layoutMTheme.footer.gridTemplateColumn1})`,
    },
    content: {
      height: 'fit-content',
      overflow: 'scroll',
    },
    image: {
      height: '30vh',
    },
  },
  program: {
    height: 'fit-content',
    position: '',
    top: '',
    left: '',
    gridTemplateColumns: '',
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
};