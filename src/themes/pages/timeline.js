import { fontSizes, fontWeights, colors, baseLTheme, baseMTheme } from "@/themes/theme";

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

const timelineWidths = {
  l: '200vw',
  m: '300vw',
}

export const timelineWidthsWithoutVW = {
  l: 2,
  m: 3,
}

export const timelineLTheme = {
  ...baseLTheme,
  width: timelineWidths.l,
  widthPerMinute: `calc(${timelineWidths.l} / ${NUMBER_OF_HOURS * 60})`,
  widthPerHour: `calc(${timelineWidths.l} / ${NUMBER_OF_HOURS})`,
  widthPerHalfDay: `calc(${timelineWidths.l} / ${NUMBER_OF_HOURS} * ${HOURS_PER_HALF_DAY})`,
  grid: {
    border: `1px solid ${colors.grayLight}`
  },
  days: {
    height: '90px',
    fontSize: fontSizes.l.medium,
    fontWeight: '500',
  },
  hours: {
    height: '36px',
    fontSize: fontSizes.l.small,
    fontWeight: fontWeights.l.small,
  },
  locations: {
    marginTop: '40px',
    marginBottom: '40px',
  },
  floor: {
    left: `calc(calc(${timelineWidths.l} / ${NUMBER_OF_HOURS}) / 2)`,
    width: `calc(100vw - calc(${timelineWidths.m} / ${NUMBER_OF_HOURS}) / 2)`,
    borderLeft: '2px solid black',
  }
};

export const timelineMTheme = {
  ...baseMTheme,
  width: timelineWidths.m,
  widthPerMinute: `calc(${timelineWidths.m} / ${NUMBER_OF_HOURS * 60})`,
  widthPerHour: `calc(${timelineWidths.m} / ${NUMBER_OF_HOURS})`,
  widthPerHalfDay: `calc(${timelineWidths.m} / ${NUMBER_OF_HOURS} * ${HOURS_PER_HALF_DAY})`,
  grid: {
    border: `1px solid ${colors.grayLight}`
  },
  days: {
    height: '35px',
    fontSize: fontSizes.m.medium,
    fontWeight: '500',
  },
  hours: {
    height: '45px',
    fontSize: fontSizes.m.large,
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
};