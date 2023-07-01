export const FIRST_TIME = 1689919200000;
export const LAST_TIME = 1690149600000;
export const PROJECTS_FIRST_TIME = 1689922800000;
export const PROJECTS_LAST_TIME = LAST_TIME;
export const FIRST_DAY_START_HOUR = 8
export const HOURS_PER_DAY = 24
export const HOURS_PER_HALF_DAY = 12
export const HOURS_FIRST_DAY = HOURS_PER_DAY - FIRST_DAY_START_HOUR
export const NUMBER_OF_HOURS = HOURS_FIRST_DAY + HOURS_PER_DAY + HOURS_PER_DAY;
export const NUMBER_OF_HALF_DAYS = Math.round(NUMBER_OF_HOURS / HOURS_PER_HALF_DAY);
export const DAYS = {
  de: [
    {name: 'Freitag 21.07.', hours: HOURS_FIRST_DAY, hoursBefore: 0, totalHours: HOURS_PER_DAY - FIRST_DAY_START_HOUR, scrollXFactor: (HOURS_PER_DAY - FIRST_DAY_START_HOUR) / 2},
    {name: 'Samstag 22.07.', hours: HOURS_PER_DAY, hoursBefore: HOURS_FIRST_DAY, totalHours: FIRST_DAY_START_HOUR + HOURS_PER_DAY, scrollXFactor: (FIRST_DAY_START_HOUR + HOURS_PER_DAY / 2)},
    {name: 'Sonntag 23.07.', hours: HOURS_PER_DAY, hoursBefore: HOURS_FIRST_DAY + HOURS_PER_DAY, totalHours: FIRST_DAY_START_HOUR + HOURS_PER_DAY + HOURS_PER_DAY, scrollXFactor: (FIRST_DAY_START_HOUR + HOURS_PER_DAY + HOURS_PER_DAY / 2)},
  ],
  en: [
    {name: 'Friday 21.07.', hours: HOURS_PER_DAY - FIRST_DAY_START_HOUR, scrollXFactor: (HOURS_PER_DAY - FIRST_DAY_START_HOUR) / 2},
    {name: 'Saturday 22.07.', hours: HOURS_PER_DAY, scrollXFactor: (FIRST_DAY_START_HOUR + HOURS_PER_DAY / 2)},
    {name: 'Sunday 23.07.', hours: HOURS_PER_DAY,  scrollXFactor: (FIRST_DAY_START_HOUR + HOURS_PER_DAY + HOURS_PER_DAY / 2)},
  ]
}

export const breakpoints = {
  mobile: 1660,
};

const timelineWidths = {
  default: '200vw',
  mobile: '200vw',
}

export const timelineWidthsWithoutVW = {
  default: 2,
  mobile: 2,
}

const borderWidths = {
  default: '2px',
  mobile: '2px',
}


const fontSizes = {
  default: {
    small: '0.7rem',
    medium: '1.4rem',
  },
  mobile: {
    small: '0.7rem',
    medium: '0.8rem',
    large: '1.0rem',
  }
}

const fontWeights = {
  default: {
    small: 500,
    medium: 600,
  },
  mobile: {
    small: 500,
    medium: 600,
  }
}

const colors = {
  pink: '#d1acd0',
    pinkLight: '#ebdcea',
    pinkTransparent: 'rgba(209, 172, 208, 0.4)',
    green: '#1a3f2b',
    greenLight: '#a2b1a9',
    greenTransparent: 'rgba(26, 63, 43, 0.4)',
    white: 'white',
    gray: 'rgb(52, 52, 52)',
    grayLight: 'rgb(215, 215, 215)',
    black: 'black',
    blackTransparent: 'rgba(1, 1, 1, 0.8)',
}

export const defaultTheme = {
  breakpoints: {
    mobile: `(max-width: ${breakpoints.mobile}px)`,
  },
  colors: colors,
  borderWidth: '2px',
  border: '2px solid black',
  fontSizes: fontSizes.default,
  fontWeights: fontWeights.default,
  box: {
    height: '36px',
    padding: '0.2rem 0.4rem',
  },
  timeline: {
    width: timelineWidths.default,
    widthPerMinute: `calc(${timelineWidths.default} / ${NUMBER_OF_HOURS * 60})`,
    widthPerHour: `calc(${timelineWidths.default} / ${NUMBER_OF_HOURS})`,
    widthPerHalfDay: `calc(${timelineWidths.default} / ${NUMBER_OF_HOURS} * ${HOURS_PER_HALF_DAY})`,
    grid: {
      border: `1px solid ${colors.grayLight}`
    },
    days: {
      height: '90px',
      fontSize: fontSizes.default.medium,
      fontWeight: '500',
    },
    hours: {
      height: '36px',
      fontSize: fontSizes.default.small,
      fontWeight: fontWeights.default.small,
    },
    locations: {
      marginTop: '40px',
      marginBottom: '40px',
    },
    floor: {
      left: `calc(calc(${timelineWidths.default} / ${NUMBER_OF_HOURS}) / 2)`,
      width: `calc(100vw - calc(${timelineWidths.mobile} / ${NUMBER_OF_HOURS}) / 2)`,
      borderLeft: '2px solid black',
    }
  }
};

export const mobileTheme = {
  breakpoints: {
    mobile: `(max-width: ${breakpoints.mobile}px)`,
  },
  colors: {
    pink: '#d1acd0',
    pinkLight: '#ebdcea',
    pinkTransparent: 'rgba(209, 172, 208, 0.4)',
    green: '#1a3f2b',
    greenLight: '#a2b1a9',
    greenTransparent: 'rgba(26, 63, 43, 0.4)',
    white: 'white',
    gray: 'rgb(52, 52, 52)',
    grayLight: 'rgb(215, 215, 215)',
    black: 'black',
    blackTransparent: 'rgba(1, 1, 1, 0.8)',
  },
  borderWidth: '2px',
  border: '2px solid black',
  fontSizes: fontSizes.mobile,
  fontWeights: fontWeights.mobile,
  box: {
    height: '36px',
    padding: '0.2rem 0.4rem',
  },
  timeline: {
    width: timelineWidths.mobile,
    widthPerMinute: `calc(${timelineWidths.mobile} / ${NUMBER_OF_HOURS * 60})`,
    widthPerHour: `calc(${timelineWidths.mobile} / ${NUMBER_OF_HOURS})`,
    widthPerHalfDay: `calc(${timelineWidths.mobile} / ${NUMBER_OF_HOURS} * ${HOURS_PER_HALF_DAY})`,
    grid: {
      border: `1px solid ${colors.grayLight}`
    },
    days: {
      height: '35px',
      fontSize: fontSizes.mobile.medium,
      fontWeight: '500',
    },
    hours: {
      height: '45px',
      fontSize: fontSizes.mobile.large,
      fontWeight: '500',
    },
    locations: {
      marginTop: '0px',
      marginBottom: '10px',
    },
    floor: {
      left: '0',
      width: '100vw',
      borderLeft: '0',
    },
  }
};