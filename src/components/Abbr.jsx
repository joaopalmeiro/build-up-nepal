import { styled } from '../../stitches.config';

// Source: https://www.samanthaming.com/tidbits/98-html-abbr/
const Abbr = styled('abbr', {
    cursor: 'help',

    lineHeight: 'inherit',

    // https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line
    textDecorationLine: 'underline',
    textDecorationStyle: 'dashed',
    textUnderlineOffset: '3px',
    // textDecorationColor: '$mauve4',
    textDecorationColor: '$mauve7'
});

export default Abbr;
