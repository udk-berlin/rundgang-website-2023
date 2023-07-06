import { createContext, useContext, useReducer } from 'react'

const SliderContext = createContext(null)
const SliderDispatchContext = createContext(null)

export function SliderProvider ({ children, defaultPosition = 0 }) {
  const [slider, dispatch] = useReducer(
    sliderReducer,
    {position: defaultPosition, origin: null}
  )

  return (
    <SliderContext.Provider value={slider}>
      <SliderDispatchContext.Provider value={dispatch}>
        {children}
      </SliderDispatchContext.Provider>
    </SliderContext.Provider>
  )
}

export function useSlider () {
  return useContext(SliderContext)
}

export function useSliderDispatch () {
  return useContext(SliderDispatchContext)
}

function sliderReducer (state, action) {
  switch (action.type) {
    case 'update': {
      return {
        position: action.position,
        origin: action.origin,
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
