import {createContext, useContext} from "react";

export const SliderContext = createContext(null);

export function useSlider () {
  return useContext(SliderContext)
}
