export const FIRST_TIME = 1658494800000; //1689944400000;
export const LAST_TIME = 1658700000000; // 1690149600000;
export const TIMELINE_WIDTH = 4000;

export const START_HOUR = 15
export const HOURS_PER_DAY = 24
export const HOURS_PER_HALF_DAY = 12
export const NUMBER_OF_HOURS = HOURS_PER_DAY - START_HOUR + HOURS_PER_DAY + HOURS_PER_DAY; // start am Freitag 15h bis Sonntag 24h
export const NUMBER_OF_QUARTER_HOURS = 4 * NUMBER_OF_HOURS; // start am Freitag 15h bis Sonntag 24h
export const NUMBER_OF_MINUTES = 60 * NUMBER_OF_HOURS;
export const WIDTH_PER_HOUR = TIMELINE_WIDTH / NUMBER_OF_HOURS;
export const WIDTH_PER_QUARTER_HOUR = TIMELINE_WIDTH / NUMBER_OF_QUARTER_HOURS;
export const WIDTH_PER_MINUTE = TIMELINE_WIDTH / NUMBER_OF_MINUTES;
export function range(start, stop, step = 1) {
  return Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
}

export const DAYS = {
  de: [
    {name: 'Freitag 21.07.', hours: HOURS_PER_DAY - START_HOUR, scrollX: ((9 * WIDTH_PER_HOUR) / 2)},
    {name: 'Samstag 22.07.', hours: HOURS_PER_DAY, scrollX: 9 * WIDTH_PER_HOUR + (24 * WIDTH_PER_HOUR / 2)},
    {name: 'Sonntag 23.07.', hours: HOURS_PER_DAY, scrollX: 9 * WIDTH_PER_HOUR + 24 * WIDTH_PER_HOUR + (24 * WIDTH_PER_HOUR / 2)},
  ],
  en: [
    {name: 'Friday 21.07.', hours: HOURS_PER_DAY - START_HOUR, scrollX: ((9 * WIDTH_PER_HOUR) / 2)},
    {name: 'Saturday 22.07.', hours: HOURS_PER_DAY, scrollX: 9 * WIDTH_PER_HOUR + (24 * WIDTH_PER_HOUR / 2)},
    {name: 'Sunday 23.07.', hours: HOURS_PER_DAY, scrollX: 9 * WIDTH_PER_HOUR + 24 * WIDTH_PER_HOUR + (24 * WIDTH_PER_HOUR / 2)},
  ]
}