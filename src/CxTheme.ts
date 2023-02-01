import {createComponent} from '@lit-labs/react';
import * as React from 'react';
import {tagName, Theme} from '@cortex-ui/core/cx/components/theme/theme';

export const CxTheme = createComponent({
  tagName,
  elementClass: Theme,
  react: React,
});
