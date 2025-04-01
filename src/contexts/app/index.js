import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react'
import PropTypes from 'prop-types'
import { nerdlet, NerdletStateContext, PlatformStateContext } from 'nr1'
import { useUserSettingsReader, useUserSettingsWriter } from '../../hooks'
import { newUserSettings } from '../../model'
import { UI_CONTENT } from '../../constants'

function reducer(appState, action) {
  switch (action.type) {
    case 'platformStateChanged':
      return {
        ...appState,
        platformState: action.platformState,
      }

    case 'nerdletStateChanged':
      return {
        ...appState,
        nerdletState: action.nerdletState,
      }

    case 'userSettingsChanged':
      return {
        ...appState,
        userSettingsState: action.userSettingsState,
      }
  }
}

export const AppContext = createContext(null)
export const AppDispatchContext = createContext(null)

export default function AppProvider({ children }) {
  const platformState = useContext(PlatformStateContext),
    nerdletState = useContext(NerdletStateContext),
    [appState, dispatch] = useReducer(reducer, {
      platformState,
      nerdletState,
      userSettingsState: {
        reading: false,
        readError: null,
        writing: false,
        writeError: null,
        writeFinished: false,
        userSettings: null,
      },
    }),
    updateUserSettingsState = useCallback(
      (updates) =>
        dispatch({
          type: 'userSettingsChanged',
          userSettingsState: { ...appState.userSettingsState, ...updates },
        }),
      [appState, dispatch]
    ),
    handleReadingUserSettings = useCallback(() => {
      updateUserSettingsState({
        reading: true,
        readError: null,
        userSettings: null,
      })
    }, [updateUserSettingsState]),
    handleReadUserSettingsError = useCallback(
      (err) => {
        updateUserSettingsState({
          reading: false,
          readError: err,
          userSettings: null,
        })
      },
      [updateUserSettingsState]
    ),
    handleReadUserSettingsComplete = useCallback(
      (data) => {
        updateUserSettingsState({
          reading: false,
          readError: null,
          userSettings: data || newUserSettings(),
        })
      },
      [updateUserSettingsState]
    ),
    handleWritingUserSettings = useCallback(() => {
      updateUserSettingsState({
        writing: true,
        writeError: null,
        writeFinished: false,
      })
    }, [updateUserSettingsState]),
    handleWriteUserSettingsError = useCallback(
      (err) => {
        updateUserSettingsState({
          writing: false,
          writeError: err,
          writeFinished: false,
        })
      },
      [updateUserSettingsState]
    ),
    handleWriteUserSettingsComplete = useCallback(
      (userSettings) => {
        updateUserSettingsState({
          writing: false,
          writeError: null,
          writeFinished: true,
          userSettings: userSettings,
        })
      },
      [updateUserSettingsState]
    ),
    writeUserSettings = useUserSettingsWriter({
      onWriting: handleWritingUserSettings,
      onError: handleWriteUserSettingsError,
      onComplete: handleWriteUserSettingsComplete,
    }),
    value = useMemo(
      () => ({
        writeUserSettings,
        ...appState,
      }),
      [writeUserSettings, appState]
    )

  useMemo(() => {
    nerdlet.setConfig({
      actionControls: false,
      accountPicker: true,
      headerType: nerdlet.HEADER_TYPE.CUSTOM,
      headerTitle: UI_CONTENT.GLOBAL.HEADER_TITLE,
      timePicker: false,
    })
  }, [])

  useEffect(() => {
    dispatch({ type: 'platformStateChanged', platformState })
  }, [platformState])

  useEffect(() => {
    dispatch({ type: 'nerdletStateChanged', nerdletState })
  }, [nerdletState])

  useUserSettingsReader({
    onReading: handleReadingUserSettings,
    onError: handleReadUserSettingsError,
    onComplete: handleReadUserSettingsComplete,
  })

  useEffect(() => {
    if (appState.userSettingsState.writeFinished) {
      updateUserSettingsState({ writeFinished: false })
    }
  }, [appState.userSettingsState.writeFinished, updateUserSettingsState])

  return (
    <AppContext.Provider value={value}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node,
}
