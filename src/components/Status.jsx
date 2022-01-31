import { styled } from '../../stitches.config';

// Source:
// - https://github.com/radix-ui/design-system/blob/v0.6.2/components/Status.tsx
// - https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L1017
// - https://design-system.modulz-deploys.com/#status
const Status = styled('div', {
    // Reset
    flexShrink: 0,

    // Custom
    borderRadius: '$round',

    variants: {
        // https://stitches.dev/docs/tokens
        size: {
            1: {
                width: '$1',
                height: '$1'
            },
            2: {
                width: 9,
                height: 9
            }
        },
        variant: {
            gray: {
                backgroundColor: '$mauve7'
            },
            indigo: {
                backgroundColor: '$indigo9'
            },
            red: {
                backgroundColor: '$red9'
            }
        }
    },

    defaultVariants: {
        size: '2',
        variant: 'gray'
    }
});

export default Status;
