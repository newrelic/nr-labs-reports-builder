import React from 'react'
import PropTypes from 'prop-types'
import { SectionMessage } from 'nr1'
import { HelpModal as LabsHelpModal } from '@newrelic/nr-labs-components'
import { UI_CONTENT } from '../../constants'

export default function HelpModal({ isOpen, setIsOpen }) {
  return (
    <LabsHelpModal
      isModalOpen={isOpen}
      setModalOpen={setIsOpen}
      about={UI_CONTENT.HELP_MODAL.ABOUT}
      urls={UI_CONTENT.HELP_MODAL.URLS}
      ownerBadge={UI_CONTENT.HELP_MODAL.OWNER_BADGE}
    >
      <SectionMessage
        className="help-modal-system-requirements"
        description={UI_CONTENT.SYSTEM_REQUIREMENTS_MODAL.DESCRIPTION}
      />
    </LabsHelpModal>
  )
}

HelpModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
}
