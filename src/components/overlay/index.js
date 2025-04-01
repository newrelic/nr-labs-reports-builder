import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Button, Stack, StackItem } from 'nr1'
import { UI_CONTENT } from '../../constants'

function createModalRoot() {
  let modalRoot = document.getElementById('modal-root')

  if (!modalRoot) {
    modalRoot = document.createElement('div')
    modalRoot.id = 'modal-root'
    document.body.appendChild(modalRoot)
  }

  return modalRoot
}

function Overlay({
  children,
  showCancel = true,
  loading = false,
  alignButtons = Overlay.ALIGN_BUTTONS.CENTER,
  onSubmit,
  onCancel,
}) {
  const modalRoot = useMemo(() => createModalRoot(), []),
    overlayContentRef = useRef(),
    handleSubmit = useCallback(() => {
      onSubmit()
    }, [onSubmit]),
    handleCancel = useCallback(() => {
      onCancel()
    }, [onCancel]),
    handleKeyup = useCallback(
      (evt) => {
        if (evt.code === 'Escape') {
          onCancel()
        }
      },
      [onCancel]
    ),
    handleClicksOutsideComponent = useCallback(
      (evt) => {
        if (
          overlayContentRef &&
          !overlayContentRef.current.contains(evt.target)
        ) {
          onCancel()
        }
      },
      [overlayContentRef, onCancel, contentWidth]
    ),
    setupHandlers = useCallback(() => {
      // Delay here so that we don't capture button click events that may have
      // triggered the overlay to open.
      setTimeout(() => {
        document.addEventListener('click', handleClicksOutsideComponent)
        document.addEventListener('keyup', handleKeyup)
      }, 200)
    }, [handleClicksOutsideComponent, handleKeyup]),
    cleanupHandlers = useCallback(() => {
      document.removeEventListener('click', handleClicksOutsideComponent)
      document.removeEventListener('keyup', handleKeyup)
    }, [handleClicksOutsideComponent, handleKeyup])
  let contentWidth = 0

  useEffect(() => {
    contentWidth = overlayContentRef.current.clientWidth

    setupHandlers()
    return cleanupHandlers
  }, [setupHandlers, cleanupHandlers, overlayContentRef])

  return createPortal(
    <div className="overlay">
      <div className="overlay-backdrop"></div>
      <div className="overlay-content" ref={overlayContentRef}>
        <Stack
          spacingType={[Stack.SPACING_TYPE.NONE]}
          directionType={Stack.DIRECTION_TYPE.VERTICAL}
          horizontalType={Stack.HORIZONTAL_TYPE.FILL}
          fullWidth
        >
          <StackItem grow>{children}</StackItem>

          <StackItem grow>
            <Stack
              className={`align-buttons-${alignButtons}`}
              spacingType={[Stack.SPACING_TYPE.LARGE, Stack.SPACING_TYPE.NONE]}
              directionType={Stack.DIRECTION_TYPE.HORIZONTAL}
              fullWidth
            >
              <StackItem>
                <Button
                  onClick={handleSubmit}
                  type={Button.TYPE.PRIMARY}
                  loading={loading}
                  spacingType={[
                    Button.SPACING_TYPE.NONE,
                    Button.SPACING_TYPE.SMALL,
                    Button.SPACING_TYPE.NONE,
                    Button.SPACING_TYPE.NONE,
                  ]}
                >
                  {UI_CONTENT.GLOBAL.ACTION_LABEL_OK}
                </Button>
                {showCancel && (
                  <Button
                    onClick={handleCancel}
                    type={Button.TYPE.PLAIN}
                    spacingType={[
                      Button.SPACING_TYPE.NONE,
                      Button.SPACING_TYPE.SMALL,
                      Button.SPACING_TYPE.NONE,
                      Button.SPACING_TYPE.NONE,
                    ]}
                  >
                    {UI_CONTENT.GLOBAL.ACTION_LABEL_CANCEL}
                  </Button>
                )}
              </StackItem>
            </Stack>
          </StackItem>
        </Stack>
      </div>
    </div>,
    modalRoot
  )
}

Overlay.ALIGN_BUTTONS = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
}

export default Overlay
