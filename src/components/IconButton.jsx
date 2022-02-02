import { styled } from '../../stitches.config';

// Source:
// - https://github.com/radix-ui/design-system/blob/v0.6.2/components/IconButton.tsx
// - https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L1715
// - https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L1912
const IconButton = styled('button', {
    // Reset
    boxSizing: 'border-box',
    appearance: 'none',

    display: 'inline-flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',

    fontFamily: 'inherit',
    fontSize: '14px',
    lineHeight: '1',

    outline: 'none',
    padding: '0',
    borderWidth: '0',

    textDecoration: 'none',
    userSelect: 'none',

    // https://stackoverflow.com/questions/28294791/transparent-color-vs-rgba0-0-0-0
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',

    '&::before': {
        boxSizing: 'border-box'
    },
    '&::after': {
        boxSizing: 'border-box'
    },

    // Custom
    color: '$hiContrast',
    backgroundColor: '$loContrast',
    border: '1px solid $mauve7',

    '@hover': {
        '&:hover': {
            borderColor: '$mauve8'
        }
    },
    '&:active': {
        backgroundColor: '$mauve2'
    },
    '&:focus': {
        borderColor: '$mauve8',
        boxShadow: '0 0 0 1px $colors$mauve8'
    },
    '&:disabled': {
        pointerEvents: 'none',
        backgroundColor: 'transparent',
        color: '$mauve6'
    },

    variants: {
        size: {
            1: {
                borderRadius: '$1',
                height: '$5',
                width: '$5'
            },
            2: {
                borderRadius: '$2',
                height: '$6',
                width: '$6'
            },
            3: {
                borderRadius: '$2',
                height: '$7',
                width: '$7'
            },
            4: {
                borderRadius: '$3',
                height: '$8',
                width: '$8'
            }
        },
        variant: {
            ghost: {
                backgroundColor: 'transparent',
                borderWidth: '0',

                '@hover': {
                    '&:hover': {
                        backgroundColor: '$mauveA3'
                    }
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$mauveA8, 0 0 0 1px $colors$mauveA8'
                },
                '&:active': {
                    backgroundColor: '$mauveA4'
                }
            }
        }
    },

    defaultVariants: {
        size: '1',
        variant: 'ghost'
    }
});

export default IconButton;
