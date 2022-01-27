/* eslint-disable sort-keys */
import { styled } from '../stitches.config';

// Source: https://github.com/radix-ui/design-system/blob/v0.6.2/components/Container.tsx
// https://cssreference.io/property/flex-shrink/
const Container = styled('div', {
    // Reset
    boxSizing: 'border-box',
    flexShrink: 0,

    // Custom
    ml: 'auto',
    mr: 'auto',
    px: '$5',

    variants: {
        size: {
            1: {
                maxWidth: '430px'
            },
            2: {
                maxWidth: '715px'
            },
            3: {
                maxWidth: '1145px'
            },
            4: {
                maxWidth: 'none'
            }
        }
    },

    defaultVariants: {
        size: '4'
    }
});

export default Container;
