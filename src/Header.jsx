import Heading from './Heading';
import Link from './Link';
import Paragraph from './Paragraph';

// https://emojipedia.org/flag-nepal/
// https://emojipedia.org/brick/
// https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L1505
// https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L917
function Header() {
    return (
        <>
            <Heading size="4">build it up, Nepal!</Heading>
            <Paragraph css={{ alignSelf: 'start' }}>
                <Link href="https://www.buildupnepal.com/" target="_blank" rel="noreferrer">
                    Build up Nepal
                </Link>
            </Paragraph>
            <Paragraph css={{ alignSelf: 'start' }}>
                The start of these projects and enterprises goes from 2015 to April 2021 — thus,
                take into account that the data shown here corresponds to a snapshot at a given
                moment in time.
            </Paragraph>
            <Paragraph css={{ alignSelf: 'start' }}>
                Since there are a few projects with missing coordinates, don{"'"}t be surprised if
                you add a new project and it doesn{"'"}t appear on the map below.
            </Paragraph>
        </>
    );
}

export default Header;
