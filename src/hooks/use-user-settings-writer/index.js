import { useCallback, useEffect, useState } from 'react'
import { useUserStorageMutation } from 'nr1'

export default function useUserSettingsWriter({
  onWriting,
  onError,
  onComplete,
}) {
  const [{ called, done }, setState] = useState({
      loading: false,
      called: false,
      done: false,
    }),
    updateState = useCallback(
      (l, c, d) => {
        setState({ loading: l, called: c, done: d })
      },
      [setState]
    ),
    userSettingsWriter = useUserStorageMutation({
      actionType: useUserStorageMutation.ACTION_TYPE.WRITE_DOCUMENT,
      collection: 'settings',
      documentId: 'settings.json',
    }),
    write = useCallback(
      (userSettings) => {
        userSettingsWriter[0]({ document: userSettings })
        updateState(true, true, false)
        onWriting()
      },
      [userSettingsWriter, updateState, onWriting]
    ),
    reset = useCallback(() => {
      userSettingsWriter[1].reset()
    }, [userSettingsWriter])

  useEffect(() => {
    if (done || !called) {
      return
    }

    if (userSettingsWriter[1].error) {
      reset()
      updateState(false, false, true)
      onError(userSettingsWriter[1].error)
      return
    }

    if (!userSettingsWriter[1].loading) {
      reset()
      updateState(false, false, true)
      onComplete(userSettingsWriter[1].data.nerdStorageWriteDocument)
    }
  }, [
    done,
    called,
    userSettingsWriter,
    updateState,
    reset,
    onError,
    onComplete,
  ])

  return write
}
