import Heading from './Heading';
import Link from './Link';
import Paragraph from './Paragraph';

// https://emojipedia.org/flag-nepal/
// https://emojipedia.org/brick/
// https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L1505
function Header() {
    return (
        <>
            <Heading size="4">build it up, Nepal!</Heading>
            <Paragraph css={{ alignSelf: 'start' }}>
                <Link href="https://www.buildupnepal.com/" target="_blank" rel="noreferrer">
                    Build up Nepal
                </Link>
            </Paragraph>
        </>
    );
}

export default Header;
