import { baseLTheme, baseMTheme } from "@/themes/theme";

export const breakpoints = {
  m: 700,
};

export const landingLTheme = {
  ...baseLTheme,
  id: 'l',
  fontWeights: {
    s: 400
  },
  localization: {
    fontSize: '1rem',
    color: 'white',
  },
  header: {
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: 'none',
    padding: '0',
    fontSize: '1rem',
    timeline: {
      justifySelf: 'center',
    }
  },
  footer: {
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: 'none',
    padding: '0',
    fontSize: '1rem',
    imprint: {
      justifySelf: 'center',
      paddingTop: '0',
    },
    faq: {
      justifySelf: 'end',
      paddingTop: '0',
    },
  },
  info: {
    alignItems: 'center',
    fontSize: '1.2rem'
  }
};

export const landingMTheme = {
  ...baseMTheme,
  id: 'm',
  fontWeights: {
    s: 400
  },
  localization: {
    fontSize: '1rem',
    color: 'white',
  },
  header: {
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr 1fr',
    padding: '1rem 1rem 0 1rem',
    fontSize: '1.3rem',
    timeline: {
      justifySelf: 'end',
    }
  },
  footer: {
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    padding: '0 1rem 1rem 1rem',
    fontSize: '0.95rem',
    imprint: {
      justifySelf: 'start',
      paddingTop: '0.05rem',
    },
    faq: {
      justifySelf: 'start',
      paddingTop: '0.25rem',
    },
  },
  info: {
    alignItems: '',
    fontSize: '1rem'
  }
};
