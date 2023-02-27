import { createComponent, EventName } from '@lit-labs/react';
import * as React from 'react';
import { DatePicker } from '@cortex-ui/core/cx/datepicker';

export const CXDatePicker = createComponent({
  tagName: 'cx-datepicker',
  elementClass: DatePicker,
  react: React,
  events: {
    onSelectDate: 'select-date' as EventName<CXDatePicker.SelectDate>,
  },
});
