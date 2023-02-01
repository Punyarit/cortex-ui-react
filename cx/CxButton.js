import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { Button, onPressed, tagName, } from '@cortex-ui/core/cx/components/button/button';
export const CxButton = createComponent({
    tagName,
    elementClass: Button,
    react: React,
    events: {
        onPressed: onPressed,
    },
});
