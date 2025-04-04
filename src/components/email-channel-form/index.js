import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import {
  MultilineTextField,
  Checkbox,
  HeadingText,
  Radio,
  RadioGroup,
  Stack,
  StackItem,
  TextField,
  Tile,
} from 'nr1'
import { SYMBOLS, UI_CONTENT } from '../../constants'
import { FormContext, Validation } from '../../contexts/form'
import {
  emailSubjectNotEmpty,
  emailToNotEmptyValidEmails,
  emailQueryResultsHtmlMaxRowsIsPositiveNumber,
  emailCcValidEmails,
  emailFormatIsValid,
} from '../validations'

export default function EmailChannelForm({
  onChangeSubject,
  onChangeFormat,
  onChangeAttachOutput,
  onChangeQueryResultsHtmlMaxRows,
  onChangeTo,
  onChangeCc,
  onChangeBody,
}) {
  const { formState } = useContext(FormContext),
    {
      emailSubject,
      emailFormat,
      emailAttachOutput,
      emailTo,
      emailCc,
      emailBody,
      emailQueryResultsHtmlMaxRows,
      validations,
    } = formState

  return (
    <Stack
      className="email-channel-form"
      directionType={Stack.DIRECTION_TYPE.VERTICAL}
      spacingType={[Stack.SPACING_TYPE.LARGE, Stack.SPACING_TYPE.NONE]}
      fullWidth
      fullHeight
      horizontalType={Stack.HORIZONTAL_TYPE.FILL}
    >
      <StackItem>
        <Validation name="emailFormat" validation={emailFormatIsValid}>
          <RadioGroup
            label={UI_CONTENT.EMAIL_CHANNEL_FORM.FIELD_LABEL_FORMAT}
            name={SYMBOLS.EMAIL_CHANNEL_FIELDS.FORMAT}
            value={emailFormat}
            defaultValue={SYMBOLS.EMAIL_FORMATS.HTML}
            onChange={onChangeFormat}
          >
            <Radio
              label={UI_CONTENT.EMAIL_CHANNEL_FORM.FORMAT_LABEL_HTML}
              value={SYMBOLS.EMAIL_FORMATS.HTML}
            />
            <Radio
              label={UI_CONTENT.EMAIL_CHANNEL_FORM.FORMAT_LABEL_TEXT}
              value={SYMBOLS.EMAIL_FORMATS.TEXT}
            />
          </RadioGroup>
        </Validation>
      </StackItem>
      <StackItem>
        <Tile>
          <HeadingText type={HeadingText.TYPE.HEADING_6}>
            {UI_CONTENT.EMAIL_CHANNEL_FORM.QUERY_OPTIONS_HEADING}
          </HeadingText>
          <Stack
            directionType={Stack.DIRECTION_TYPE.VERTICAL}
            spacingType={[
              Stack.SPACING_TYPE.LARGE,
              Stack.SPACING_TYPE.NONE,
              Stack.SPACING_TYPE.NONE,
              Stack.SPACING_TYPE.NONE,
            ]}
            horizontalType={Stack.HORIZONTAL_TYPE.FILL}
          >
            <StackItem>
              <Checkbox
                label={UI_CONTENT.EMAIL_CHANNEL_FORM.FIELD_LABEL_ATTACH_OUTPUT}
                name={UI_CONTENT.EMAIL_CHANNEL_FORM.ATTACH_OUTPUT_INPUT_NAME}
                onChange={onChangeAttachOutput}
                checked={emailAttachOutput}
              />
            </StackItem>
            <StackItem>
              <Validation
                name="emailQueryResultsHtmlMaxRows"
                validation={emailQueryResultsHtmlMaxRowsIsPositiveNumber}
              >
                <TextField
                  label={
                    UI_CONTENT.EMAIL_CHANNEL_FORM
                      .FIELD_LABEL_QUERY_RESULTS_HTML_MAX_ROWS
                  }
                  name={
                    SYMBOLS.EMAIL_CHANNEL_FIELDS
                      .QUERY_RESULTS_HTML_MAX_ROWS_INPUT_NAME
                  }
                  placeholder={
                    UI_CONTENT.EMAIL_CHANNEL_FORM
                      .QUERY_RESULTS_HTML_MAX_ROWS_FIELD_PLACEHOLDER
                  }
                  value={emailQueryResultsHtmlMaxRows}
                  onChange={onChangeQueryResultsHtmlMaxRows}
                  invalid={validations?.emailQueryResultsHtmlMaxRows}
                />
              </Validation>
            </StackItem>
          </Stack>
        </Tile>
      </StackItem>
      <StackItem>
        <Validation name="emailSubject" validation={emailSubjectNotEmpty}>
          <TextField
            label={UI_CONTENT.EMAIL_CHANNEL_FORM.FIELD_LABEL_SUBJECT}
            name={SYMBOLS.EMAIL_CHANNEL_FIELDS.SUBJECT}
            placeholder={
              UI_CONTENT.EMAIL_CHANNEL_FORM.SUBJECT_FIELD_PLACEHOLDER
            }
            value={emailSubject}
            onChange={onChangeSubject}
            invalid={validations?.emailSubject}
            info={UI_CONTENT.EMAIL_CHANNEL_FORM.FIELD_INFO_BODY}
          />
        </Validation>
      </StackItem>
      <StackItem>
        <Validation name="emailTo" validation={emailToNotEmptyValidEmails}>
          <MultilineTextField
            rows={5}
            label={UI_CONTENT.EMAIL_CHANNEL_FORM.FIELD_LABEL_TO}
            name={SYMBOLS.EMAIL_CHANNEL_FIELDS.TO}
            placeholder={UI_CONTENT.EMAIL_CHANNEL_FORM.TO_FIELD_PLACEHOLDER}
            value={emailTo}
            onChange={onChangeTo}
            invalid={validations?.emailTo}
          />
        </Validation>
      </StackItem>
      <StackItem>
        <Validation name="emailCc" validation={emailCcValidEmails}>
          <MultilineTextField
            rows={5}
            label={UI_CONTENT.EMAIL_CHANNEL_FORM.FIELD_LABEL_CC}
            name={SYMBOLS.EMAIL_CHANNEL_FIELDS.CC}
            placeholder={UI_CONTENT.EMAIL_CHANNEL_FORM.CC_FIELD_PLACEHOLDER}
            value={emailCc}
            onChange={onChangeCc}
            invalid={validations?.emailCc}
          />
        </Validation>
      </StackItem>
      <StackItem>
        <MultilineTextField
          rows={10}
          label={UI_CONTENT.EMAIL_CHANNEL_FORM.FIELD_LABEL_BODY}
          name={SYMBOLS.EMAIL_CHANNEL_FIELDS.BODY}
          placeholder={UI_CONTENT.EMAIL_CHANNEL_FORM.BODY_FIELD_PLACEHOLDER}
          value={emailBody}
          onChange={onChangeBody}
          info={UI_CONTENT.EMAIL_CHANNEL_FORM.FIELD_INFO_BODY}
        />
      </StackItem>
    </Stack>
  )
}

EmailChannelForm.propTypes = {
  onChangeSubject: PropTypes.func,
  onChangeFormat: PropTypes.func,
  onChangeAttachOutput: PropTypes.func,
  onChangeQueryResultsHtmlMaxRows: PropTypes.func,
  onChangeTo: PropTypes.func,
  onChangeCc: PropTypes.func,
  onChangeBody: PropTypes.func,
}
