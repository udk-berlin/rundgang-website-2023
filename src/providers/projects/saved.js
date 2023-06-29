import { createContext, useContext, useReducer } from 'react'

import { useLocalStorage } from '@/hooks/local_storage'

const LOCAL_STORAGE_KEY = 'saved-projects'
const LOCAL_STORAGE_DEFAULT_VALUE = []


const SavedProjectsContext = createContext(null)
const SetSavedProjectsContext = createContext(null)

export function SavedProjectsProvider ({ children }) {
  const [savedProjects, setSavedProjects] = useLocalStorage(LOCAL_STORAGE_KEY, LOCAL_STORAGE_DEFAULT_VALUE)

  // const [savedProjects, dispatch] = useReducer(
  //   savedProjectsReducer,
  //   {
  //     ids: load()
  //   }
  // )

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

function savedProjectsReducer (state, action) {
  switch (action.type) {
    case 'load': {
      return {
        ids: load(),
      }
    }
    case 'add': {
      return {
        ids: add(action.project),
      }
    }
    case 'remove': {
      return {
        ids: remove(action.project),
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

export function load() {
  let savedProjects = localStorage.getItem(LOCAL_STORAGE_KEY)

  if (!savedProjects) {
    savedProjects = []
  }

  localStorage.setItem(LOCAL_STORAGE_KEY, savedProjects)

  return savedProjects
}

export function add(project) {
  let savedProjects = localStorage.getItem(LOCAL_STORAGE_KEY)

  if (!savedProjects) {
    savedProjects = []
  }

  savedProjects.push(project.id)

  localStorage.setItem(LOCAL_STORAGE_KEY, savedProjects)

  return savedProjects
}

export function remove(project) {
  let savedProjects = localStorage.getItem(LOCAL_STORAGE_KEY)

  if (!savedProjects) {
    savedProjects = []
  }

  savedProjects.filter(savedProject => savedProject !== project.id)

  localStorage.setItem(LOCAL_STORAGE_KEY, savedProjects)

  return savedProjects
}
