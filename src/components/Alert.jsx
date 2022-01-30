import { styled } from '../../stitches.config';

// Source:
// - https://github.com/radix-ui/design-system/blob/v0.6.2/components/Alert.tsx
// - https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L1167
const Alert = styled('div', {
    // Reset
    boxSizing: 'border-box',
    '&::before': {
        boxSizing: 'border-box'
    },
    '&::after': {
        boxSizing: 'border-box'
    },

    // Custom
    borderRadius: '$2',
    borderWidth: '$1',
    borderStyle: 'solid',
    p: '$3',

    variants: {
        variant: {
            loContrast: {
                backgroundColor: '$loContrast',
                borderColor: '$mauve6'
            },
            gray: {
                backgroundColor: '$mauve2',
                borderColor: '$mauve6'
            }
        }
    },

    defaultVariants: {
        variant: 'gray'
    }
});

export default Alert;
