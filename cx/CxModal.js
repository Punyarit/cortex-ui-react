import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { Modal, tagName } from '@cortex-ui/core/cx/components/modal/modal';
export const CxModal = createComponent({
    tagName,
    elementClass: Modal,
    react: React,
});
