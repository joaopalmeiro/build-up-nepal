import { styled } from '../stitches.config';

import Text from './Text';

// Source:
// - https://github.com/radix-ui/design-system/blob/v0.6.2/components/Link.tsx
// - https://design-system.modulz-deploys.com/#link
const Link = styled('a', {
    // https://developer.mozilla.org/en-US/docs/Web/CSS/align-items#css
    // display: 'flex',
    alignItems: 'center',
    gap: '$1',
    flexShrink: 0,

    outline: 'none',
    textDecorationLine: 'none',
    textUnderlineOffset: '3px',
    textDecorationColor: '$mauve4',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',

    lineHeight: 'inherit',

    '@hover': {
        '&:hover': {
            textDecorationLine: 'underline'
        }
    },
    '&:focus': {
        outlineWidth: '2px',
        outlineStyle: 'solid',
        outlineOffset: '2px',
        textDecorationLine: 'none'
    },

    // https://stitches.dev/docs/styling#descendant-selector
    // https://stitches.dev/docs/styling#target-a-stitches-component
    // https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L1493
    [`& ${Text}`]: {
        color: 'inherit'
    },

    variants: {
        variant: {
            subtle: {
                color: '$mauve11',
                // textDecorationColor: '$mauve4',
                '&:focus': {
                    outlineColor: '$mauve8'
                }
            },
            contrast: {
                color: '$hiContrast',
                textDecoration: 'underline',
                // textDecorationColor: '$mauve4',
                '@hover': {
                    '&:hover': {
                        textDecorationColor: '$mauve7'
                    }
                },
                '&:focus': {
                    outlineColor: '$mauve8'
                }
            }
        }
    },

    defaultVariants: {
        variant: 'contrast'
    }
});

export default Link;
