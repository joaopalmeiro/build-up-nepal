import { styled } from '../../stitches.config';

// Source:
// - https://github.com/radix-ui/design-system/blob/v0.6.2/components/Badge.tsx
// - https://design-system.modulz-deploys.com/#badge
const Badge = styled('span', {
    // Reset
    // https://developer.mozilla.org/en-US/docs/Web/CSS/appearance
    // https://www.samanthaming.com/flexbox30/8-block-vs-inline/
    boxSizing: 'border-box',

    borderWidth: '0',
    padding: '0',

    appearance: 'none',
    outline: 'none',
    textDecoration: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',

    display: 'inline-flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',

    // fontFamily: 'inherit',
    fontFamily: '$sans',
    lineHeight: '1',

    '&::before': {
        boxSizing: 'border-box',
        content: '""'
    },
    '&::after': {
        boxSizing: 'border-box',
        content: '""'
    },

    // Custom
    // backgroundColor: '$mauve3',
    // color: '$mauve11',
    borderRadius: '$pill',
    whiteSpace: 'nowrap',
    fontVariantNumeric: 'tabular-nums',

    variants: {
        size: {
            1: {
                height: '$4',
                px: '$1',
                fontSize: '$1'
            },
            2: {
                height: '$5',
                px: '$2',
                fontSize: '$2'
            }
        },
        variant: {
            gray: {
                backgroundColor: '$mauve3',
                color: '$mauve11',
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$mauve8, 0 0 0 1px $colors$mauve8'
                }
            },
            indigo: {
                backgroundColor: '$indigo3',
                color: '$indigo11',
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$indigo8, 0 0 0 1px $colors$indigo8'
                }
            },
            red: {
                backgroundColor: '$red3',
                color: '$red11',
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$red8, 0 0 0 1px $colors$red8'
                }
            }
        }
    },

    defaultVariants: {
        size: '1',
        variant: 'gray'
    }
});

export default Badge;
