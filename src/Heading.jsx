import merge from 'lodash.merge';
import { forwardRef } from 'react';

import Text from './Text';

const DEFAULT_TAG = 'h1';

// Source: https://github.com/radix-ui/design-system/blob/v0.6.2/components/Heading.tsx
// https://reactjs.org/docs/forwarding-refs.html#displaying-a-custom-name-in-devtools
const Heading = forwardRef(function Heading(props, ref) {
    // console.log(props);
    const { size = '1', ...textProps } = props;
    const textSize = {
        1: {
            '@initial': '4',
            '@bp2': '5'
        },
        2: {
            '@initial': '6',
            '@bp2': '7'
        },
        3: {
            '@initial': '7',
            '@bp2': '8'
        },
        4: {
            '@initial': '8',
            '@bp2': '9'
        }
    };
    const textCss = {
        1: {
            fontWeight: '$2',
            lineHeight: '20px',
            '@bp2': { lineHeight: '23px' }
        },
        2: {
            fontWeight: '$2',
            lineHeight: '25px',
            '@bp2': { lineHeight: '30px' }
        },
        3: {
            fontWeight: '$2',
            lineHeight: '33px',
            '@bp2': { lineHeight: '41px' }
        },
        4: {
            fontWeight: '$2',
            lineHeight: '35px',
            '@bp2': { lineHeight: '55px' }
        }
    };

    return (
        <Text
            as={DEFAULT_TAG}
            {...textProps}
            ref={ref}
            size={textSize[size]}
            css={{
                fontVariantNumeric: 'proportional-nums',
                ...merge(textCss[size], props.css)
            }}
        />
    );
});

export default Heading;
