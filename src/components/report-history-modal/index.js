import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { HeadingText, Modal, Stack, StackItem } from 'nr1'
import { UI_CONTENT } from '../../constants'
import ReportHistoryList from '../report-history-list'

export default function ReportHistoryModal({ report, open, onClose }) {
  const handleClose = useCallback(() => {
    onClose()
  }, [onClose])

  return (
    <Modal hidden={!open} onClose={handleClose}>
      <Stack
        className="report-history-modal"
        directionType={Stack.DIRECTION_TYPE.VERTICAL}
        spacingType={[Stack.SPACING_TYPE.LARGE, Stack.SPACING_TYPE.NONE]}
        fullWidth
        horizontalType={Stack.HORIZONTAL_TYPE.FILL}
      >
        <StackItem>
          <HeadingText type={HeadingText.TYPE.HEADING_3}>
            {UI_CONTENT.REPORT_HISTORY_MODAL.HEADING(report.name)}
          </HeadingText>
        </StackItem>
        <StackItem>
          <ReportHistoryList report={report} />
        </StackItem>
      </Stack>
    </Modal>
  )
}

ReportHistoryModal.propTypes = {
  report: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.func,
}
