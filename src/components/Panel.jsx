import { css, styled } from '../../stitches.config';

// Source: https://github.com/radix-ui/design-system/blob/v0.6.2/components/Panel.tsx
export const panelStyles = css({
    backgroundColor: '$panel',
    borderRadius: '$3',
    boxShadow: '$colors$shadowLight 0px 10px 38px -10px, $colors$shadowDark 0px 10px 20px -15px'
});

export const Panel = styled('div', panelStyles);
