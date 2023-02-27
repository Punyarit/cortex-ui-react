import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { Theme } from '@cortex-ui/core/cx/components/theme/theme';

export const CxTheme = createComponent({
  tagName: 'cx-theme',
  elementClass: Theme,
  react: React,
});
