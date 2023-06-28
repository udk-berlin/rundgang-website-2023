export const FIRST_TIME = 1689926400000;
export const LAST_TIME = 1690149600000;
export const PROJECTS_FIRST_TIME = 1689930000000;
export const PROJECTS_LAST_TIME = LAST_TIME;
export const TIMELINE_WIDTH = 4000;
export const FIRST_DAY_START_HOUR = 10
export const HOURS_PER_DAY = 24
export const HOURS_PER_HALF_DAY = 12
export const HOURS_FIRST_DAY = HOURS_PER_DAY - FIRST_DAY_START_HOUR
export const NUMBER_OF_HOURS = HOURS_FIRST_DAY + HOURS_PER_DAY + HOURS_PER_DAY;
export const NUMBER_OF_MINUTES = 60 * NUMBER_OF_HOURS;
export const WIDTH_PER_HOUR = TIMELINE_WIDTH / NUMBER_OF_HOURS;
export const WIDTH_PER_MINUTE = TIMELINE_WIDTH / NUMBER_OF_MINUTES;
export function range(start, stop, step = 1) {
  return Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
}
export const DAYS = {
  de: [
    {name: 'Freitag 21.07.', hours: HOURS_FIRST_DAY, scrollX: ((HOURS_FIRST_DAY * WIDTH_PER_HOUR) / 2)},
    {name: 'Samstag 22.07.', hours: HOURS_PER_DAY, scrollX: HOURS_FIRST_DAY * WIDTH_PER_HOUR + (24 * WIDTH_PER_HOUR / 2)},
    {name: 'Sonntag 23.07.', hours: HOURS_PER_DAY, scrollX: HOURS_FIRST_DAY * WIDTH_PER_HOUR + 24 * WIDTH_PER_HOUR + (24 * WIDTH_PER_HOUR / 2)},
  ],
  en: [
    {name: 'Friday 21.07.', hours: HOURS_PER_DAY - FIRST_DAY_START_HOUR, scrollX: ((HOURS_FIRST_DAY * WIDTH_PER_HOUR) / 2)},
    {name: 'Saturday 22.07.', hours: HOURS_PER_DAY, scrollX: HOURS_FIRST_DAY * WIDTH_PER_HOUR + (24 * WIDTH_PER_HOUR / 2)},
    {name: 'Sunday 23.07.', hours: HOURS_PER_DAY, scrollX: HOURS_FIRST_DAY * WIDTH_PER_HOUR + 24 * WIDTH_PER_HOUR + (24 * WIDTH_PER_HOUR / 2)},
  ]
}
