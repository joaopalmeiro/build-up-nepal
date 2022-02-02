import { styled } from '../stitches.config';

// Source:
// - https://github.com/radix-ui/design-system/blob/v0.6.2/components/Card.tsx
// - https://design-system.modulz-deploys.com/#card
// - https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L1545
const Card = styled('div', {
    // Reset
    // https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align
    boxSizing: 'border-box',

    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    appearance: 'none',

    outline: 'none',
    border: 'none',

    font: 'inherit',
    lineHeight: '1',
    textAlign: 'inherit',
    textDecoration: 'none',
    color: 'inherit',

    padding: 0,

    verticalAlign: 'middle',

    flexShrink: 0,

    // Custom
    backgroundColor: '$panel',
    display: 'block',
    borderRadius: '$3',
    position: 'relative',

    // Border
    '&::before': {
        boxSizing: 'border-box',
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
        borderRadius: '$3',
        pointerEvents: 'none'
    }
});

export default Card;
