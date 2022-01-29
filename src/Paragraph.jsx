import merge from 'lodash.merge';
import { forwardRef } from 'react';

import Text from './Text';

const DEFAULT_TAG = 'p';

// Source: https://github.com/radix-ui/design-system/blob/v0.6.2/components/Paragraph.tsx
const Paragraph = forwardRef(function Paragraph(props, ref) {
    const { size = '1', ...textProps } = props;
    const textSize = {
        1: {
            '@initial': '3',
            '@bp2': '4'
        },
        2: {
            '@initial': '5',
            '@bp2': '6'
        }
    };
    const textCss = {
        1: {
            lineHeight: '25px',
            '@bp2': { lineHeight: '27px' }
        },
        2: {
            color: '$mauve11',
            lineHeight: '27px',
            '@bp2': { lineHeight: '30px' }
        }
    };

    return (
        <Text
            as={DEFAULT_TAG}
            {...textProps}
            ref={ref}
            size={textSize[size]}
            css={{
                ...merge(textCss[size], props.css)
            }}
        />
    );
});

export default Paragraph;
