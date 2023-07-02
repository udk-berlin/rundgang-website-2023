import { baseLTheme, baseMTheme } from "@/themes/theme";

export const locationsLTheme = {
  ...baseLTheme,
  map: {
    height: 'calc(100vh - 2 * var(--layout-header-bar-container-height) - var(--layout-header-search-container-height) - 2 * var(--border-width))'
  },
  groundPlan: {
    height: 'var(--layout-footer-grid-template-column-1)',
    position: 'absolute',
    top: 'calc(var(--layout-header-bar-container-height) + var(--layout-header-search-container-height) + 2 * var(--border-width))',
    gridTemplateColumns: 'var(--layout-footer-grid-template-column-1) var(--layout-footer-grid-template-column-2) var(--layout-footer-grid-template-column-3)',
    infos: {
      height: 'calc(var(--locations-map-height) - var(--locations-ground-plan-height))',
    },
    content: {
      height: '100%',
      overflow: 'hidden',
    },
    image: {
      height: 'var(--layout-footer-grid-template-column-1)',
    }
  },
  program: {
    height: 'var(--layout-footer-grid-template-column-1)',
    position: 'absolute',
    top: 'calc(var(--layout-header-bar-container-height) + var(--layout-header-search-container-height) + 2 * var(--border-width))',
    left: 0,
    gridTemplateColumns: 'var(--layout-footer-grid-template-column-1) var(--layout-footer-grid-template-column-2) var(--layout-footer-grid-template-column-3)',
  }
};

export const locationsMTheme = {
  ...baseMTheme,
  map: {
    height: 'calc(100vh - 2 * var(--layout-header-bar-container-height) - var(--layout-header-search-container-height) - 2 * var(--border-width))'
  },
  groundPlan: {
    height: 'fit-content',
    position: '',
    top: '',
    gridTemplateColumns: '',
    infos: {
      height: 'calc(var(--locations-map-height) - var(--locations-ground-plan-height))',
    },
    content: {
      height: 'fit-content',
      overflow: 'scroll',
    },
    image: {
      height: '30vh',
    }
  },
  program: {
    height: 'fit-content',
    position: '',
    top: '',
    left: '',
    gridTemplateColumns: '',
  }
};