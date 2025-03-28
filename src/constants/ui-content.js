export const UI_CONTENT = {
  GLOBAL: {
    HEADER_LABEL_NAME: 'Name',
    HEADER_LABEL_TYPE: 'Type',
    HEADER_LABEL_ENABLED: 'Enabled',
    HEADER_TITLE: 'New Relic Reports Builder',
    ACTION_LABEL_CANCEL: 'Cancel',
    ACTION_LABEL_DELETE: 'Delete',
    ACTION_LABEL_EDIT: 'Edit',
    ACTION_LABEL_OK: 'OK',
    ACTION_LABEL_REMOVE: 'Remove',
    ACTION_LABEL_SAVE: 'Save',
    ACTION_LABEL_SAVE_AND_CLOSE: 'Save & Close',
    ACTION_LABEL_CLOSE: 'Close',
    ACTION_LABEL_RETRY: 'Retry',
    BUTTON_LABEL_DELETE_REPORT: 'Delete report',
    BUSY: {
      HEADING: 'Working on it, hang tight!',
      DESCRIPTION: 'Be right back.',
    },
    STATUS_LABEL_ENABLED: 'Enabled',
    STATUS_LABEL_DISABLED: 'Disabled',
  },

  ERRORS: {
    READ_FAILED: {
      HEADING: 'Uh-oh! Something is not right.',
      DESCRIPTION: "I couldn't read the application data.",
    },
    UNKNOWN_ROUTE: {
      HEADING: 'Uh-oh! Something is not right.',
      DESCRIPTION: "I couldn't find what you were looking for.",
    },
  },

  HOME: {
    REPORTS: {
      EMPTY_STATE: {
        HEADING: 'No reports found.',
        DESCRIPTION: 'Create a new report',
      },
      BUTTON_LABEL_CREATE_REPORT: 'Create new report',
      DELETE_REPORT_PROMPT:
        'Are you sure you want to delete this report? This action cannot be undone.',
      HEADING: 'Reports',
    },
    SCHEDULES: {
      EMPTY_STATE: {
        HEADING: 'No schedules found.',
        DESCRIPTION: 'Create a new schedule',
      },
      BUTTON_LABEL_CREATE_SCHEDULE: 'Create new schedule',
      DELETE_SCHEDULE_PROMPT:
        'Are you sure you want to delete this schedule? Deleting this schedule will also delete it from all reports which use it. This action cannot be undone.',
      HEADING: 'Schedules',
    },
    CHANNELS: {
      EMPTY_STATE: {
        HEADING: 'No channels found.',
        DESCRIPTION: 'Create a new channel',
      },
      BUTTON_LABEL_CREATE_CHANNEL: 'Create new channel',
      DELETE_CHANNEL_PROMPT:
        'Are you sure you want to delete this channel? Deleting this channel will also delete it from all schedules which use it. This action cannot be undone.',
      HEADING: 'Channels',
    },
    TAB_LABEL_REPORTS: 'Reports',
    TAB_LABEL_SCHEDULES: 'Schedules',
    TAB_LABEL_CHANNELS: 'Channels',
  },

  BASIC_SCHEDULE_FORM: {
    DAYS_OF_WEEK_FIELD_PLACEHOLDER: 'Select days of week...',
    FIELD_LABEL_FREQUENCY: 'Frequency',
    FIELD_LABEL_PERIOD: 'Period',
    FIELD_LABEL_TIME_OF_DAY: 'Time',
    PERIOD_LABEL_DAY: 'Everyday',
    PERIOD_LABEL_DAY_OF_WEEK: 'Day of week',
    PERIOD_LABEL_WEEKDAYS: 'Weekdays (Mon-Fri)',
    PERIOD_LABEL_WEEKENDS: 'Weekends (Sat-Sun)',
    PERIOD_LABEL_SUNDAY: 'Sunday',
    PERIOD_LABEL_MONDAY: 'Monday',
    PERIOD_LABEL_TUESDAY: 'Tuesday',
    PERIOD_LABEL_WEDNESDAY: 'Wednesday',
    PERIOD_LABEL_THURSDAY: 'Thursday',
    PERIOD_LABEL_FRIDAY: 'Friday',
    PERIOD_LABEL_SATURDAY: 'Saturday',
    PERIOD_VALUE_EVERYDAY: 'day',
    PERIOD_LABEL_WEEK_OF_MONTH: 'Week of month',
    PERIOD_LABEL_WEEK_ONE: 'Week one',
    PERIOD_LABEL_WEEK_TWO: 'Week two',
    PERIOD_LABEL_WEEK_THREE: 'Week three',
    PERIOD_LABEL_WEEK_FOUR: 'Week four',
    PERIOD_VALUE_WEEKDAYS: 'weekdays',
    PERIOD_VALUE_WEEKENDS: 'weekends',
    FREQUENCY_LABEL_DAILY: 'Daily',
    FREQUENCY_LABEL_WEEKLY: 'Weekly',
    FREQUENCY_LABEL_MONTHLY: 'Monthly',
    FREQUENCY_VALUE_DAILY: 'daily',
    FREQUENCY_VALUE_WEEKLY: 'weekly',
    FREQUENCY_VALUE_MONTHLY: 'monthly',
  },
  CHANNELS_FIELD: {
    BUTTON_LABEL_ADD_CHANNEL: 'Add channel',
    DELETE_PROMPT: 'Are you sure you want to delete this channel?',
    FIELD_LABEL_CHANNELS_CUSTOM: 'Channels',
    HEADER_LABEL_DETAILS: 'Details',
    NO_CHANNELS_MESSAGE: 'No channels are defined.',
  },
  DASHBOARDS_FORM: {
    BUTTON_LABEL_SELECT_DASHBOARDS: 'Select dashboards',
    FIELD_LABEL_DASHBOARDS_CUSTOM: 'Dashboards',
    NO_DASHBOARDS_MESSAGE: 'No dashboards are selected.',
  },
  DASHBOARD_PICKER: {
    HEADING: 'Select dashboards',
    NO_RESULTS_MESSAGE: 'No dashboards found',
    SEARCH_FIELD_PLACEHOLDER: 'My favorite dashboard',
  },
  EDIT_CHANNEL_FORM: {
    CHANNEL_TYPE_LABEL_EMAIL: 'Email',
    CHANNEL_TYPE_LABEL_SLACK: 'Slack',
    CHANNEL_NAME_FIELD_PLACEHOLDER: 'email-team',
    FIELD_LABEL_CHANNEL_REF: 'Channel',
    FIELD_LABEL_CHANNEL_TYPE: 'Type',
    FIELD_LABEL_CREATE_NEW_CHANNEL: 'Create a new channel',
    FIELD_LABEL_NAME: 'Name',
    FIELD_LABEL_USE_EXISTING_CHANNEL: 'Use an existing channel',
    MODE_VALUE_CREATE_NEW_CHANNEL: 'create',
    MODE_VALUE_USE_EXISTING_CHANNEL: 'useExisting',
    SAVE_ERROR_TITLE: 'Save failed',
    SAVE_ERROR_DESCRIPTION: (msg) => `Your data could not be saved: ${msg}`,
    SAVE_SUCCESS_TITLE: 'Channel saved',
    SAVE_SUCCESS_DESCRIPTION: (name) => `The channel "${name}" was saved.`,
  },
  EDIT_CHANNEL_SCREEN: {
    HEADING: 'Edit channel',
    CANCEL_PROMPT:
      'You have made changes to this channel. Are you sure you want to cancel?',
    EDIT_SHARED_CHANNEL_MESSAGE: (count) =>
      `This channel is referenced in ${count} reports. Changes will apply to all reports.`,
  },
  EDIT_REPORT_FORM: {
    FIELD_LABEL_ENABLED: 'Enabled',
    FIELD_LABEL_NAME: 'Name',
    FIELD_LABEL_TYPE: 'Type',
    REPORT_NAME_FIELD_PLACEHOLDER: 'Weekly Performance Dashboards Report',
    REPORT_TYPE_LABEL_DASHBOARD: 'Dashboard',
    REPORT_TYPE_LABEL_QUERY: 'Query',
    FORM_ERROR_TITLE: 'Uh-oh! Something is not right.',
    FORM_ERROR_DESCRIPTION: (msg) =>
      `The unexpected can be frightening: ${msg}`,
    SAVE_ERROR_TITLE: 'Save failed',
    SAVE_ERROR_DESCRIPTION: (msg) => `Your data could not be saved: ${msg}`,
    SAVE_SUCCESS_TITLE: 'Report saved',
    SAVE_SUCCESS_DESCRIPTION: (name) => `The report "${name}" was saved.`,
  },
  EDIT_REPORT_SCREEN: {
    CANCEL_PROMPT:
      'You have made changes to this report. Are you sure you want to cancel?',
    HEADING: 'Edit report',
    HEADING_HISTORY: 'History',
  },
  EDIT_SCHEDULE_FORM: {
    SCHEDULE_NAME_FIELD_PLACEHOLDER: 'email-team',
    FIELD_LABEL_SCHEDULE_REF: 'Schedule',
    FIELD_LABEL_CREATE_NEW_SCHEDULE: 'Create a new schedule',
    FIELD_LABEL_USE_EXISTING_SCHEDULE: 'Use an existing schedule',
    FIELD_LABEL_ENABLED: 'Enabled',
    FIELD_LABEL_NAME: 'Name',
    MODE_VALUE_CREATE_NEW_SCHEDULE: 'create',
    MODE_VALUE_USE_EXISTING_SCHEDULE: 'useExisting',
    SAVE_ERROR_TITLE: 'Save failed',
    SAVE_ERROR_DESCRIPTION: (msg) => `Your data could not be saved: ${msg}`,
    SAVE_SUCCESS_TITLE: 'Schedule saved',
    SAVE_SUCCESS_DESCRIPTION: (name) => `The schedule "${name}" was saved.`,
  },
  EDIT_SCHEDULE_SCREEN: {
    HEADING: 'Edit schedule',
    CANCEL_PROMPT:
      'You have made changes to this schedule. Are you sure you want to cancel?',
    EDIT_SHARED_SCHEDULE_MESSAGE: (count) =>
      `This schedule is referenced in ${count} reports. Changes will apply to all reports.`,
  },
  EMAIL_CHANNEL_FORM: {
    CC_FIELD_PLACEHOLDER: `robin@newrelic.com\npat@newrelic.com`,
    FIELD_LABEL_ATTACH_OUTPUT: 'Attach CSV with full results',
    FIELD_LABEL_CC: 'Cc',
    FIELD_LABEL_FORMAT: 'Format',
    FIELD_LABEL_DELIVERY_METHOD: 'Delivery method',
    FIELD_LABEL_SUBJECT: 'Subject',
    FIELD_LABEL_BODY: 'Message body',
    FIELD_INFO_BODY: `Placeholders can be used in this field using the syntax
{{ NAME }}. The following placeholders are available:

REPORT_NAME: Name of the report that triggered the email
PUBLISH_CONFIG_NAME: Name of the schedule that triggered the email
CHANNEL_NAME: Name of this channel
TIMESTAMP: Timestamp, in milliseconds, the email was triggered
DATETIME: Formatted date and time the email was triggered
EMAIL_FROM: Email address of the sender
EMAIL_TO: Email addresses of the recipients
EMAIL_CC: Email addresses of copy recipients
EMAIL_SUBJECT: Email subject
`,
    FIELD_LABEL_TO: 'To',
    FIELD_LABEL_QUERY_RESULTS_HTML_MAX_ROWS: 'Number of results in email body',
    FORMAT_LABEL_HTML: 'HTML',
    FORMAT_LABEL_TEXT: 'Text',
    ATTACH_OUTPUT_INPUT_NAME: 'emailAttachOutput',
    QUERY_OPTIONS_HEADING: 'Query Report Options',
    QUERY_RESULTS_HTML_MAX_ROWS_FIELD_PLACEHOLDER: '25',
    QUERY_RESULTS_HTML_MAX_ROWS_INPUT_NAME: 'emailQueryResultsHtmlMaxRows',
    SUBJECT_FIELD_PLACEHOLDER: '{{ REPORT_NAME }}',
    BODY_FIELD_PLACEHOLDER: `Please find attached the performance dashboards for report {{ REPORT_NAME }}.`,
    TO_FIELD_PLACEHOLDER: `jan@newrelic.com\nsam@newrelic.com`,
  },
  NRQL_EDITOR: {
    QUERY_FIELD_PLACEHOLDER: 'SELECT count(*) FROM Transaction FACET appName',
  },
  SCHEDULES_FIELD: {
    BUTTON_LABEL_ADD_SCHEDULE: 'Add schedule',
    DELETE_PROMPT: 'Are you sure you want to delete this schedule?',
    FIELD_LABEL_SCHEDULES_CUSTOM: 'Schedules',
    HEADER_LABEL_SCHEDULE: 'Schedule',
    HEADER_LABEL_CHANNELS: 'Channels',
    NO_SCHEDULES_MESSAGE: 'No schedules are defined.',
  },
  QUERY_FORM: {
    FIELD_LABEL_ACCOUNTS: 'Accounts',
    ACCOUNTS_FIELD_PLACEHOLDER: 'Select accounts...',
    FIELD_LABEL_QUERY: 'Query',
    QUERY_FIELD_PLACEHOLDER: 'SELECT count(*) FROM Transaction FACET appName',
  },
  REPORT_HISTORY_LIST: {
    STATUS_LABEL_FAILED: 'Failed',
    STATUS_LABEL_SUCCESS: 'Success',
    PUBLISH_MESSAGE: 'Report outputs published for the following schedules:',
  },
  REPORT_HISTORY_MODAL: {
    HEADING: (name) => `History for "${name}"`,
  },
  REPORT_LIST: {
    HEADING: 'Reports',
  },
  REPORT_TABLE: {
    ACTION_LABEL_VIEW_HISTORY: 'View history',
    HEADER_LABEL_LAST_MODIFIED: 'Last modified',
    HEADER_LABEL_LAST_RUN: 'Last run',
  },
  SCHEDULE_FIELD: {
    BUTTON_LABEL_EDIT_SCHEDULE: 'Edit schedule',
    FIELD_LABEL_SCHEDULE_CUSTOM: 'Schedule',
  },
  SLACK_CHANNEL_FORM: {
    CC_FIELD_PLACEHOLDER: `robin@newrelic.com\npat@newrelic.com`,
    FIELD_LABEL_WEBHOOK_URL: 'Webhook URL',
    WEBHOOK_URL_FIELD_PLACEHOLDER:
      'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX',
  },
}
