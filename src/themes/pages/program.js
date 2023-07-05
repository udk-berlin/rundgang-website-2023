import { baseLTheme, baseMTheme, fontSizes } from "@/themes/theme";

export const programLTheme = {
  ...baseLTheme,
  MASONRY_COLUMNS: 4,
  MASONRY_GUTTER: "0.75rem",
  padding: "0.75rem",
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
};

export const programMTheme = {
  ...baseMTheme,
  MASONRY_COLUMNS: 2,
  MASONRY_GUTTER: "0.75rem",
  padding: "0.75rem",
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
};

export const programSTheme = {
  ...baseMTheme,
  MASONRY_COLUMNS: 1,
  MASONRY_GUTTER: "0.75rem",
  padding: "0.75rem",
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
};
