import { createContext, useContext, useReducer } from 'react'
import filterReducer from "@/providers/filter_reducer";
import fastFilterReducer from "@/providers/fast_filter_reducer";
import useSWR from 'swr'
import { getLocationsTreeUrl } from '@/utils/api/locations'

const FilterContext = createContext(null)
const FilterDispatchContext = createContext(null)
const fetcher = (url) => fetch(url).then((res) => {
  res = res.json()

  const locations = {}
  Object.values(res.data.children).forEach( location => {
    locations[location.id] = location
  })

  //const locationsLocations = {}
  //filter(Object.values(locations)).forEach(location => locationsLocations[location.id] = location)

  return undefined
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array
}
export function FilterProvider ({ projects, formats, formatsFilters, structures, structuresFilters, children, useFast = false }) {
  const locations = useSWR(
    getLocationsTreeUrl(),
    fetcher
  );

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
