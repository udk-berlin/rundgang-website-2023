export const FIRST_TIME = 1658494800000; //1689944400000;
export const LAST_TIME = 1658700000000; // 1690149600000;
export const BOX_HEIGHT = 34;
export const TIMELINE_WIDTH = 6000;
export const NUMBER_OF_HOURS = 9 + 24 + 24; // start am Freitag 15h bis Sonntag 24h
export const NUMBER_OF_QUARTER_HOURS = 4 * NUMBER_OF_HOURS; // start am Freitag 15h bis Sonntag 24h
export const NUMBER_OF_MINUTES = 60 * NUMBER_OF_HOURS;
export const WIDTH_PER_HOUR = TIMELINE_WIDTH / NUMBER_OF_HOURS;
export const WIDTH_PER_QUARTER_HOUR = TIMELINE_WIDTH / NUMBER_OF_QUARTER_HOURS;
export const WIDTH_PER_MINUTE = TIMELINE_WIDTH / NUMBER_OF_MINUTES;
export function range(start, stop, step = 1) {
  return Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
}
