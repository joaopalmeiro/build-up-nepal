import { styled } from '../stitches.config';

// Source: https://github.com/radix-ui/design-system/blob/v0.6.2/components/Button.tsx
// https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric
// https://www.radix-ui.com/docs/primitives/components/dialog
const Button = styled('button', {
    // Reset
    all: 'unset',
    alignItems: 'center',
    boxSizing: 'border-box',
    userSelect: 'none',
    display: 'inline-flex',
    flexShrink: 0,
    justifyContent: 'center',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    '&::before': {
        boxSizing: 'border-box'
    },
    '&::after': {
        boxSizing: 'border-box'
    },

    // Custom
    fontFamily: '$sans',
    fontWeight: '$2',
    fontVariantNumeric: 'tabular-nums',
    // cursor: 'pointer',

    '&:disabled': {
        backgroundColor: '$mauve2',
        boxShadow: 'inset 0 0 0 1px $colors$mauve7',
        color: '$mauve8',
        pointerEvents: 'none'
    },

    variants: {
        size: {
            1: {
                borderRadius: '$1',
                height: '$5',
                px: '$2',
                fontSize: '$1',
                // https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
                lineHeight: '$sizes$5'
            },
            2: {
                borderRadius: '$2',
                height: '$6',
                px: '$3',
                fontSize: '$3',
                lineHeight: '$sizes$6'
            },
            3: {
                borderRadius: '$2',
                height: '$7',
                px: '$4',
                fontSize: '$4',
                lineHeight: '$sizes$7'
            }
        },
        variant: {
            gray: {
                backgroundColor: '$loContrast',
                boxShadow: 'inset 0 0 0 1px $colors$mauve7',
                color: '$hiContrast',
                '@hover': {
                    '&:hover': {
                        boxShadow: 'inset 0 0 0 1px $colors$mauve8'
                    }
                },
                '&:active': {
                    backgroundColor: '$mauve2',
                    boxShadow: 'inset 0 0 0 1px $colors$mauve8'
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$mauve8, 0 0 0 1px $colors$mauve8'
                }
            },
            indigo: {
                backgroundColor: '$indigo2',
                boxShadow: 'inset 0 0 0 1px $colors$indigo7',
                color: '$indigo11',
                '@hover': {
                    '&:hover': {
                        boxShadow: 'inset 0 0 0 1px $colors$indigo8'
                    }
                },
                '&:active': {
                    backgroundColor: '$indigo3',
                    boxShadow: 'inset 0 0 0 1px $colors$indigo8'
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$indigo8, 0 0 0 1px $colors$indigo8'
                }
            }
        },

        ghost: {
            true: {
                backgroundColor: 'transparent',
                boxShadow: 'none'
            }
        }
    },

    compoundVariants: [
        {
            variant: 'gray',
            ghost: 'true',
            css: {
                backgroundColor: 'transparent',
                // color: '$hiContrast',
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$mauveA3',
                        boxShadow: 'none'
                    }
                },
                '&:active': {
                    backgroundColor: '$mauveA4'
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$mauveA8, 0 0 0 1px $colors$mauveA8'
                }
            }
        },
        {
            variant: 'indigo',
            ghost: 'true',
            css: {
                backgroundColor: 'transparent',
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$indigoA3',
                        boxShadow: 'none'
                    }
                },
                '&:active': {
                    backgroundColor: '$indigoA4'
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$indigoA8, 0 0 0 1px $colors$indigoA8'
                }
            }
        }
    ],

    defaultVariants: {
        size: '1',
        variant: 'gray',
        ghost: false
    }
});

export default Button;
