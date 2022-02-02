import { css, styled } from '../../stitches.config';

// Source: https://github.com/radix-ui/design-system/blob/v0.6.2/components/Overlay.tsx
export const overlayStyles = css({
    backgroundColor: 'rgba(0, 0, 0, 0.15)'
});

export const Overlay = styled('div', overlayStyles);
