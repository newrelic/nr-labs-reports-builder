import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from 'nr1'

export default function CustomField({ className, label, children }) {
  return (
    <div className={`custom-field ${className || ''}`}>
      <TextField label={label} className="hidden-field" disabled value={''} />
      {children}
    </div>
  )
}

CustomField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
}
