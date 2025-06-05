import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { SectionMessage, Stack, StackItem, TextField } from 'nr1'
import { UI_CONTENT } from '../../constants'
import Overlay from '../overlay'

function RequirementsMessagePrompt({ prompt, invalid, onChangePrompt }) {
  return (
    <Stack
      directionType={Stack.DIRECTION_TYPE.VERTICAL}
      spacingType={[Stack.SPACING_TYPE.LARGE, Stack.SPACING_TYPE.NONE]}
      horizontalType={Stack.HORIZONTAL_TYPE.FILL}
    >
      <StackItem>{UI_CONTENT.SYSTEM_REQUIREMENTS_MODAL.DESCRIPTION}</StackItem>
      <StackItem>{UI_CONTENT.SYSTEM_REQUIREMENTS_MODAL.PROMPT_LABEL}</StackItem>
      <StackItem>
        <span className="prompt">
          {UI_CONTENT.SYSTEM_REQUIREMENTS_MODAL.PROMPT}
        </span>
      </StackItem>
      <StackItem>
        <TextField
          placeholder={UI_CONTENT.SYSTEM_REQUIREMENTS_MODAL.PROMPT}
          value={prompt}
          onChange={onChangePrompt}
          invalid={invalid}
          style={{ width: '100%' }}
        />
      </StackItem>
    </Stack>
  )
}

RequirementsMessagePrompt.propTypes = {
  prompt: PropTypes.string,
  invalid: PropTypes.string,
  onChangePrompt: PropTypes.func,
}

export default function SystemRequirementsModal({ writing, onSubmit }) {
  const [prompt, setPrompt] = useState(''),
    [isValid, setIsValid] = useState(false),
    [invalid, setInvalid] = useState(''),
    handleChangePrompt = useCallback(
      (e) => {
        setPrompt(e.target.value)

        const valid =
          e.target.value.trim() === UI_CONTENT.SYSTEM_REQUIREMENTS_MODAL.PROMPT

        setIsValid(valid)

        // If the prompt was previously invalid but is now valid, clear the
        // invalid message.
        if (invalid && valid) {
          setInvalid('')
        }
      },
      [invalid, setPrompt, setIsValid]
    ),
    handleSubmit = useCallback(() => {
      if (isValid) {
        onSubmit()
        return
      }

      // If the prompt is invalid, set the invalid message used by the text
      // field and prevent the overlay from being closed.
      setInvalid(UI_CONTENT.SYSTEM_REQUIREMENTS_MODAL.INVALID_PROMPT_MESSAGE)
    }, [isValid, onSubmit, setInvalid])

  return (
    <Overlay
      className="system-requirements-modal"
      showCancel={false}
      loading={writing}
      okEnabled={isValid}
      onSubmit={handleSubmit}
    >
      <Stack>
        <StackItem>
          <SectionMessage
            type={SectionMessage.TYPE.WARNING}
            title={UI_CONTENT.SYSTEM_REQUIREMENTS_MODAL.HEADING}
            description={
              <RequirementsMessagePrompt
                prompt={prompt}
                invalid={invalid}
                onChangePrompt={handleChangePrompt}
              />
            }
            actions={[
              {
                label:
                  UI_CONTENT.SYSTEM_REQUIREMENTS_MODAL.ACTION_LABEL_LEARN_MORE,
                to: UI_CONTENT.SYSTEM_REQUIREMENTS_MODAL.ACTION_LABEL_LINK,
              },
            ]}
          />
        </StackItem>
      </Stack>
    </Overlay>
  )
}

SystemRequirementsModal.propTypes = {
  writing: PropTypes.bool,
  onSubmit: PropTypes.func,
}
