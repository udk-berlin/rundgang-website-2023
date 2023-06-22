import { createContext, useContext, useReducer } from 'react'

const SliderContext = createContext(null)
const SliderDispatchContext = createContext(null)

export function SliderProvider ({ children }) {
  const [slider, dispatch] = useReducer(
    sliderReducer,
    {position: 0}
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
        position: action.position
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}