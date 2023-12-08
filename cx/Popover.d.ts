import { Popover } from '@cortex-ui/core/cx/popover';
export declare const CxPopover: import("@lit-labs/react").ReactWebComponent<Popover, {}>;
declare global {
    namespace CxTooltip {
        type JSX = typeof CxPopover.defaultProps;
    }
}
