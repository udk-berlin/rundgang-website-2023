import {scaleLinear} from "d3-scale";

export const FIRST_TIME = 1689944400000;
export const LAST_TIME =  1690149600000;

export const TIMELINE_WIDTH = 6000;

export const TIMELINE_PADDING_LEFT =  0;

export const mapTimeToX =  scaleLinear().domain([FIRST_TIME, LAST_TIME]).range([TIMELINE_PADDING_LEFT, TIMELINE_WIDTH]);


export function range(start, stop, step = 1) {
  return Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
}

const GRID_STEP_SIZE =  450;
const GRID_OFFSET_STEPS = 7;
export const GRID_OFFSET = GRID_OFFSET_STEPS * GRID_STEP_SIZE;
export const BOX_WIDTH = FIRST_TIME + GRID_OFFSET;



export const BOX_HEIGHT = 34;



// export const TIMELINE_WIDTH = 6000;
export const NUMBER_OF_HOURS = 9 + 24 + 24; // start am Freitag 15h bis Sonntag 24h
export const NUMBER_OF_QUARTER_HOURS = 4 * NUMBER_OF_HOURS; // start am Freitag 15h bis Sonntag 24h
export const NUMBER_OF_MINUTES = 60 * NUMBER_OF_HOURS;
export const WIDTH_PER_HOUR = Math.round(TIMELINE_WIDTH / NUMBER_OF_HOURS);
export const WIDTH_PER_QUARTER_HOUR = Math.round(TIMELINE_WIDTH / NUMBER_OF_QUARTER_HOURS);

export const WIDTH_PER_MINUTE = TIMELINE_WIDTH / NUMBER_OF_MINUTES;
export const HOURS = range(0, NUMBER_OF_HOURS)


export const mapTimeToNumberOfMinutes =  scaleLinear().domain([FIRST_TIME, LAST_TIME]).range([0, NUMBER_OF_MINUTES]);


