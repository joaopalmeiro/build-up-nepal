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
            <Heading size="4" css={{ py: '$9' }}>
                build it up, Nepal!
            </Heading>
            <Paragraph css={{ alignSelf: 'start' }}>
                Across Nepal,{' '}
                <Link href="https://www.buildupnepal.com/" target="_blank" rel="noreferrer">
                    Build up Nepal
                </Link>{' '}
                strives to empower people and communities to open businesses and build affordable,
                safe homes. One of the highlights is the use of a more eco-friendly brick technology
                called Interlocking Bricks.
            </Paragraph>
            <Paragraph>
                In collaboration with{' '}
                <Link href="https://www.vizforsocialgood.com/" target="_blank" rel="noreferrer">
                    Viz for Social Good
                </Link>
                , a project/challenge was launched for the community to visualize data on the impact
                of Build up Nepal throughout its mission. For more information, please check{' '}
                <Link
                    href="https://www.vizforsocialgood.com/join-a-project/2021/12/28/build-up-nepal"
                    target="_blank"
                    rel="noreferrer"
                >
                    the page about this project
                </Link>
                .
            </Paragraph>
            <Paragraph css={{ alignSelf: 'start' }}>
                Thus, here, it is possible, at random, to learn more about each of the projects and
                enterprises. To do this, just add new projects and a card will appear with details
                and some context for each of them.
            </Paragraph>
            <Paragraph css={{ alignSelf: 'start' }}>
                The start of these projects and enterprises goes from 2015 to April 2021 — thus,
                take into account that the data shown here corresponds to a snapshot at a given
                moment in time.
            </Paragraph>
            <Paragraph css={{ alignSelf: 'start' }}>
                Since there are a few projects with missing coordinates, don{"'"}t be surprised if
                you add a new project and it doesn{"'"}t appear on the map below. By the way, if you
                want to explore a certain point on Google Maps, just click on it.
            </Paragraph>
            <Paragraph css={{ alignSelf: 'start' }}>Let{"'"}s start!🇳🇵</Paragraph>
        </>
    );
}

export default Header;
