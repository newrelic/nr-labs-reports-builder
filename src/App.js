import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { Button, Icon, Layout, LayoutItem, nerdlet } from 'nr1'
import {
  BusyView,
  ErrorView,
  HelpModal,
  HomeScreen,
  EditReportScreen,
  EditPublishConfigScreen,
  EditChannelScreen,
  SystemRequirementsModal,
} from './components'
import { AppContext, RouteContext, StorageContext } from './contexts'
import { UI_CONTENT, ROUTES } from './constants'

export default function App() {
  const route = useContext(RouteContext),
    { writeUserSettings, userSettingsState } = useContext(AppContext),
    { reading: readingStorage, readError: readStorageError } =
      useContext(StorageContext),
    [checkSystemRequirements, setCheckSystemRequirements] = useState(true),
    [showSystemRequirementsModal, setShowSystemRequirementsModal] =
      useState(false),
    [showHelpModal, setShowHelpModal] = useState(false),
    handleCloseSystemRequirementsModal = useCallback(() => {
      writeUserSettings({
        ...userSettingsState.userSettings,
        seenSystemRequirements: true,
      })
      setShowSystemRequirementsModal(false)
    }, [writeUserSettings, userSettingsState, setShowSystemRequirementsModal])

  useMemo(() => {
    const actionControlButtons = [
      {
        type: Button.TYPE.PRIMARY,
        label: UI_CONTENT.GLOBAL.BUTTON_LABEL_HELP,
        iconType: Icon.TYPE.INTERFACE__INFO__HELP,
        onClick: () => setShowHelpModal(true),
      },
    ]

    nerdlet.setConfig({
      actionControls: true,
      actionControlButtons,
      accountPicker: true,
      headerType: nerdlet.HEADER_TYPE.CUSTOM,
      headerTitle: UI_CONTENT.GLOBAL.HEADER_TITLE,
      timePicker: false,
    })
  }, [])

  const View = useMemo(() => {
    if (userSettingsState.reading || readingStorage) {
      return (
        <BusyView
          heading={UI_CONTENT.GLOBAL.BUSY.HEADING}
          message={UI_CONTENT.GLOBAL.BUSY.DESCRIPTION}
        />
      )
    }

    if (userSettingsState.readError) {
      return (
        <ErrorView
          heading={UI_CONTENT.ERRORS.READ_USER_SETTINGS_FAILED.HEADING}
          description={UI_CONTENT.ERRORS.READ_USER_SETTINGS_FAILED.DESCRIPTION}
          error={userSettingsState.readError}
        />
      )
    }

    if (userSettingsState.writeError) {
      return (
        <ErrorView
          heading={UI_CONTENT.ERRORS.WRITE_USER_SETTINGS_FAILED.HEADING}
          description={UI_CONTENT.ERRORS.WRITE_USER_SETTINGS_FAILED.DESCRIPTION}
          error={userSettingsState.writeError}
        />
      )
    }

    if (readStorageError) {
      return (
        <ErrorView
          heading={UI_CONTENT.ERRORS.READ_FAILED.HEADING}
          description={UI_CONTENT.ERRORS.READ_FAILED.DESCRIPTION}
          error={readStorageError}
        />
      )
    }

    const { path } = route

    switch (path) {
      case ROUTES.HOME:
        return <HomeScreen />

      case ROUTES.EDIT_REPORT:
        return <EditReportScreen />

      case ROUTES.EDIT_SCHEDULE:
        return <EditPublishConfigScreen />

      case ROUTES.EDIT_CHANNEL:
        return <EditChannelScreen />
    }

    return (
      <ErrorView
        heading={UI_CONTENT.ERRORS.UNKNOWN_ROUTE.HEADING}
        description={UI_CONTENT.ERRORS.UNKNOWN_ROUTE.DESCRIPTION}
      />
    )
  }, [userSettingsState, readingStorage, readStorageError, route])

  useEffect(() => {
    if (!checkSystemRequirements) {
      return
    }

    const { userSettings } = userSettingsState

    if (!userSettings) {
      return
    }

    if (!userSettings.seenSystemRequirements) {
      setShowSystemRequirementsModal(true)
    }

    setCheckSystemRequirements(false)
  }, [
    checkSystemRequirements,
    userSettingsState,
    setShowSystemRequirementsModal,
    setCheckSystemRequirements,
  ])

  return (
    <div className="report-builder">
      <Layout className="report-builder-container">
        <LayoutItem>{View}</LayoutItem>
      </Layout>
      {showSystemRequirementsModal && (
        <SystemRequirementsModal
          writing={userSettingsState.writing}
          onSubmit={handleCloseSystemRequirementsModal}
        />
      )}
      {showHelpModal && (
        <HelpModal isOpen={showHelpModal} setIsOpen={setShowHelpModal} />
      )}
    </div>
  )
}
