import React from 'react'
import PropTypes from 'prop-types'
import { SectionMessage, Stack, StackItem } from 'nr1'
import { UI_CONTENT } from '../../constants'
import Overlay from '../overlay'

export default function SystemRequirementsModal({ writing, onSubmit }) {
  return (
    <Overlay showCancel={false} loading={writing} onSubmit={onSubmit}>
      <Stack>
        <StackItem>
          <SectionMessage
            type={SectionMessage.TYPE.INFO}
            title={UI_CONTENT.SYSTEM_REQUIREMENTS_MODAL.HEADING}
            description={UI_CONTENT.SYSTEM_REQUIREMENTS_MODAL.DESCRIPTION}
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
