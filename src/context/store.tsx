import React, {
  ReactElement,
  createContext,
  useContext,
  useReducer,
} from 'react'

/**
 * https://reactjs.org/docs/hooks-reference.html#usereducer
 * https://reactjs.org/docs/context.html#gatsby-focus-wrapper
 */

type State = {
  expanded: boolean
  mode: 'light' | 'dark'
}

type ActionType =
  | { type: 'OPEN_CLOSE'; payload: boolean }
  | { type: 'MODE_SWITCH'; payload: 'light' | 'dark' }

type Store = {
  state: State
  open: () => void
  close: () => void
  toggle: () => void
  toggleMode: (mode: 'light' | 'dark') => void
}

const initialState: Store = {
  state: {
    expanded: false,
    mode: 'dark',
  },
  open: () => ({}),
  close: () => ({}),
  toggle: () => ({}),
  toggleMode: () => ({}),
}

const AppContext = createContext<Store>(initialState)

AppContext.displayName = 'AppContext'

const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case 'OPEN_CLOSE':
      return {
        ...state,
        expanded: action.payload,
      }
    case 'MODE_SWITCH':
      return {
        ...state,
        mode: action.payload,
      }
  }
}

export const AppContextProvider = ({
  children,
}: {
  children: ReactElement
}): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState.state)

  const open = () => {
    dispatch({
      type: 'OPEN_CLOSE',
      payload: true,
    })
  }

  const close = () => {
    dispatch({
      type: 'OPEN_CLOSE',
      payload: false,
    })
  }

  const toggle = () => {
    dispatch({
      type: 'OPEN_CLOSE',
      payload: !state.expanded,
    })
  }

  const toggleMode = (mode: 'light' | 'dark') => {
    dispatch({
      type: 'MODE_SWITCH',
      payload: mode,
    })
  }

  return (
    <AppContext.Provider value={{ state, open, close, toggle, toggleMode }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext(): Store {
  const context = useContext(AppContext)
  if (context === undefined || context === null) {
    throw new Error(`useAppContext must be called within AppContextProvider`)
  }
  return context
}
