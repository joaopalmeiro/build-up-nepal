import Link from './Link';
import Paragraph from './Paragraph';

const getHoverColor = (color) => ({
    '@hover': {
        '&:hover': {
            // https://www.joshwcomeau.com/gradient-generator/
            // https://learnui.design/tools/gradient-generator.html
            // https://github.com/radix-ui/design-system/blob/v0.6.2/components/Text.tsx#L102
            // https://github.com/radix-ui/design-system/blob/v0.6.2/components/Text.tsx#L111
            // https://github.com/radix-ui/design-system/blob/v0.6.2/components/Text.tsx#L205
            // background: 'linear-gradient(to right, $indigo11, $red11)',
            // WebkitBackgroundClip: 'text',
            // WebkitTextFillColor: 'transparent',
            color
        }
    }
});

import { styled } from '../stitches.config';

// Source: https://github.com/radix-ui/design-system/blob/v0.6.2/components/Box.tsx
const Foot = styled('footer', {
    py: '$5'
});

function Footer() {
    return (
        <Foot>
            {/* https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L421 */}
            {/* https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L1505 */}
            <Paragraph css={{ ta: 'center' }}>
                <Link
                    href="https://www.vizforsocialgood.com/join-a-project/2021/12/28/build-up-nepal"
                    target="_blank"
                    rel="noreferrer"
                    css={getHoverColor('$indigo11')}
                >
                    Build up Nepal project
                </Link>{' '}
                •{' '}
                <Link
                    href="https://www.vizforsocialgood.com/"
                    target="_blank"
                    rel="noreferrer"
                    css={getHoverColor('$indigo11')}
                >
                    Viz for Social Good
                </Link>{' '}
                ft.{' '}
                <Link
                    href="https://twitter.com/joaompalmeiro"
                    target="_blank"
                    rel="noreferrer"
                    css={getHoverColor('$red11')}
                >
                    João Palmeiro
                </Link>{' '}
                •{' '}
                <Link
                    href="https://github.com/joaopalmeiro/build-up-nepal/issues"
                    target="_blank"
                    rel="noreferrer"
                    css={getHoverColor('$red11')}
                >
                    Any feedback?
                </Link>
            </Paragraph>
        </Foot>
    );
}

export default Footer;
