import { createContext, useContext, useReducer } from 'react'
import filterReducer from "@/providers/filter_reducer";
import fastFilterReducer from "@/providers/fast_filter_reducer";

const FilterContext = createContext(null)
const FilterDispatchContext = createContext(null)

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array
}
export function FilterProvider ({ projects, locations = {}, formats, formatsFilters, structures, structuresFilters, children, useFast = false }) {
  let reducer

  if (useFast) {
    projects = [...projects]
    shuffleArray(projects)
    reducer = fastFilterReducer
  } else {
    reducer = filterReducer
  }

  const [filter, dispatch] = useReducer(
    reducer,
    {
      projects: projects,
      filteredProjects: projects,
      locations: locations,
      filteredLocations: locations,
      formats: formats,
      formatsFilters: formatsFilters,
      structures: structures,
      structuresFilters: structuresFilters
    }
  )

  return (
    <FilterContext.Provider value={filter}>
      <FilterDispatchContext.Provider value={dispatch}>
        {children}
      </FilterDispatchContext.Provider>
    </FilterContext.Provider>
  )
}

export function useFilter () {
  return useContext(FilterContext)
}

export function useFilterDispatch () {
  return useContext(FilterDispatchContext)
}
