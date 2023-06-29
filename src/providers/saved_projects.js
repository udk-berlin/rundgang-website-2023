import { createContext, useContext } from 'react'

import { useLocalStorage } from '@/hooks/local_storage'

const LOCAL_STORAGE_KEY = 'saved-projects'
const LOCAL_STORAGE_DEFAULT_VALUE = []


const SavedProjectsContext = createContext(null)
const SetSavedProjectsContext = createContext(null)

export function SavedProjectsProvider ({ children }) {
  const [savedProjects, setSavedProjects] = useLocalStorage(LOCAL_STORAGE_KEY, LOCAL_STORAGE_DEFAULT_VALUE)

  return (
    <SavedProjectsContext.Provider value={savedProjects}>
      <SetSavedProjectsContext.Provider value={setSavedProjects}>
        {children}
      </SetSavedProjectsContext.Provider>
    </SavedProjectsContext.Provider>
  )
}

export function useSavedProjects () {
  return useContext(SavedProjectsContext)
}

export function useSetSavedProjects () {
  return useContext(SetSavedProjectsContext)
}
