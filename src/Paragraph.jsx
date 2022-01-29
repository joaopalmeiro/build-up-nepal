import merge from 'lodash.merge';
import { forwardRef } from 'react';

import Text from './Text';

const DEFAULT_TAG = 'p';

// Source: https://github.com/radix-ui/design-system/blob/v0.6.2/components/Paragraph.tsx
const Paragraph = forwardRef(function Paragraph(props, ref) {
    return <Text as={DEFAULT_TAG} />;
});

export default Paragraph;
