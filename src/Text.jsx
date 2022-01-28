import { styled } from '../stitches.config';

// Source: https://github.com/radix-ui/design-system/blob/v0.6.2/components/Text.tsx
// https://ped.ro/writing/variant-driven-components
// https://rsms.me/inter/dynmetrics/
// https://rsms.me/inter/
// https://fontsource.org/fonts/inter
const Text = styled('span', {
    // Reset
    lineHeight: '1',
    margin: '0',
    fontWeight: 400,
    fontVariantNumeric: 'tabular-nums',
    display: 'block',

    // Custom
    fontFamily: '$sans',

    variants: {
        size: {
            1: {
                fontSize: '$1'
            },
            2: {
                fontSize: '$2'
            },
            3: {
                fontSize: '$3'
            },
            4: {
                fontSize: '$4'
            },
            5: {
                fontSize: '$5',
                letterSpacing: '-0.015em'
            },
            6: {
                fontSize: '$6',
                letterSpacing: '-0.016em'
            },
            7: {
                fontSize: '$7',
                letterSpacing: '-0.031em',
                textIndent: '-0.005em'
            },
            8: {
                fontSize: '$8',
                letterSpacing: '-0.034em',
                textIndent: '-0.018em'
            },
            9: {
                fontSize: '$9',
                letterSpacing: '-0.055em',
                textIndent: '-0.025em'
            }
        },

        variant: {
            gray: {
                color: '$mauve11'
            },
            contrast: {
                color: '$hiContrast'
            }
        }
    },

    defaultVariants: {
        size: '3',
        variant: 'contrast'
    }
});

export default Text;
