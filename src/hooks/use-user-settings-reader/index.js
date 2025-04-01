import { useCallback, useEffect, useState } from 'react'
import { useUserStorageQuery } from 'nr1'

export default function useUserSettingsReader({
  onReading,
  onError,
  onComplete,
}) {
  const [{ loading, done }, setState] = useState({
      loading: false,
      done: false,
    }),
    updateState = useCallback(
      (l, d) => {
        setState({
          loading: l,
          done: d,
        })
      },
      [setState]
    ),
    {
      loading: reading,
      error,
      data,
    } = useUserStorageQuery({
      collection: 'settings',
      documentId: 'settings.json',
    })

  useEffect(() => {
    if (done) {
      return
    }

    if (!loading) {
      updateState(true, false)
      onReading()
      return
    }

    if (error) {
      updateState(false, true)
      onError(error)
      return
    }

    if (!reading) {
      updateState(false, true)
      onComplete(data)
    }
  }, [
    done,
    loading,
    error,
    reading,
    data,
    updateState,
    onReading,
    onError,
    onComplete,
  ])
}
