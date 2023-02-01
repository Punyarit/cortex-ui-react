import {createComponent} from '@lit-labs/react';
import * as React from 'react';
import {Progress} from '@cortex-ui/core/cx/components/progress/progress';

export const CxProgress = createComponent({
  tagName: 'cx-progress',
  elementClass: Progress,
  react: React,
});
