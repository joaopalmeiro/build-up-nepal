import { styled } from '../stitches.config';

// Source: https://github.com/radix-ui/design-system/blob/v0.6.2/components/Image.tsx
const Image = styled('img', {
    // Reset
    // https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align
    // verticalAlign: 'middle',
    maxWidth: '100%'
});

export default Image;
