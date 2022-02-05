import { DrawingPinIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';
import isEmpty from 'lodash.isempty';
import sample from 'lodash.sample';

import { globalCss, styled } from '../stitches.config';

import { availableDataAtom, carbonAtom, housesAtom, markersAtom } from './atoms';
import Box from './Box';
import Button from './Button';
import Cards from './Cards';
import Container from './Container';
import Counter from './Counter';
import Flex from './Flex';
import Footer from './Footer';
import Header from './Header';
import Image from './Image';
import bunUrl from './img/bun_svgo_width_height.svg';
import vfsgUrl from './img/vfsg.png';
import NepalMap from './NepalMap';
import Tooltip from './Tooltip';
import { generateTwitterShareUrl } from './utils';

// https://vitejs.dev/guide/assets.html#importing-asset-as-url
// https://vitejs.dev/config/#build-assetsinlinelimit

// Source: https://www.joshwcomeau.com/css/custom-css-reset/
// https://piccalil.li/blog/a-modern-css-reset/
// https://stitches.dev/docs/styling#global-styles
const globalStyles = globalCss({
    // https://www.joshwcomeau.com/css/custom-css-reset/#digit-box-sizing-model
    '*, *::before, *::after': { boxSizing: 'border-box' },
    // https://www.joshwcomeau.com/css/custom-css-reset/#digit-remove-default-margin
    // https://www.joshwcomeau.com/css/custom-css-reset/#digit-tweaking-line-height
    // body: { lineHeight: 1.5 },
    '*': { margin: 0, lineHeight: 'calc(1em + 0.5rem)' },
    // https://www.joshwcomeau.com/css/custom-css-reset/#digit-percentage-based-heights
    'html, body, #root': { height: '100%' },
    // https://www.joshwcomeau.com/css/custom-css-reset/#digit-font-smoothing
    body: { WebkitFontSmoothing: 'antialiased' },
    // https://www.joshwcomeau.com/css/custom-css-reset/#digit-sensible-media-defaults
    'img, picture, video, canvas, svg': { display: 'block', maxWidth: '100%' },
    // https://www.joshwcomeau.com/css/custom-css-reset/#digit-inherit-fonts-for-form-controls
    'input, button, textarea, select': { font: 'inherit' },
    // https://www.joshwcomeau.com/css/custom-css-reset/#digit-word-wrapping
    'p, h1, h2, h3, h4, h5, h6': {
        overflowWrap: 'break-word'
        // hyphens: 'auto'
    },
    // https://www.joshwcomeau.com/css/custom-css-reset/#digit-root-stacking-context
    '#root': { isolation: 'isolate' }
});

// Source: https://ped.ro/
const Background = styled('svg', {
    // https://developer.mozilla.org/en-US/docs/Web/CSS/filter
    filter: 'contrast(120%) brightness(120%)',
    height: '100vh',
    left: '0px',
    // opacity: '1',
    opacity: '0.25',
    pointerEvents: 'none',
    position: 'fixed',
    top: '0px',
    transform: 'translateY(0px)',
    width: '100%',
    zIndex: '$max'
});

function App() {
    globalStyles();

    // console.log(vfsgUrl, bunUrl);

    // https://jotai.org/docs/utils/use-update-atom
    // https://jaketrent.com/post/remove-array-element-without-mutating
    const setMarkers = useUpdateAtom(markersAtom);
    const availableData = useAtomValue(availableDataAtom);

    const numberHouses = useAtomValue(housesAtom);
    const numberCarbon = useAtomValue(carbonAtom);

    // console.log(numberHouses, numberCarbon);
    // const disableTwitterShareButton = numberHouses === 0 && numberCarbon === 0;
    // console.log(disableTwitterShareButton);

    // console.log(availableData, availableData.length, isEmpty(availableData));

    const addMarker = () =>
        setMarkers((d) => {
            const idx = sample(availableData);

            // console.log(idx, data[idx]);

            // return [idx, ...d];
            return [...d, idx];
        });

    return (
        <>
            {/* Rendered: {++useRef(0).current} */}
            <Container size="2">
                <Flex direction="column" gap="2" align="center">
                    <Header />
                    <NepalMap />
                    <Tooltip content="Click to check a new enterprise/project">
                        <Button size="3" onClick={addMarker} disabled={isEmpty(availableData)}>
                            <Box
                                css={{
                                    mr: '$1'
                                }}
                            >
                                {/* <PlusIcon /> */}
                                <DrawingPinIcon />
                            </Box>
                            Add
                        </Button>
                    </Tooltip>

                    <Counter />

                    {/* https://stackoverflow.com/a/22780197 */}
                    {/* https://developer.twitter.com/en/docs/twitter-for-websites/web-intents/overview */}
                    {/* https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview */}
                    {/* https://publish.twitter.com/ */}
                    {/* https://developer.twitter.com/en/docs/twitter-for-websites/privacy */}
                    {/* https://github.com/NickKaramoff/shareon */}
                    {/* https://github.com/NickKaramoff/toot */}
                    {/* https://github.com/mastodon/mastodon/issues/442 */}
                    {/* https://github.com/nygardk/react-share */}
                    <Button
                        size="1"
                        variant="indigo"
                        ghost
                        // as={disableTwitterShareButton ? 'button' : 'a'}
                        as="a"
                        css={{ cursor: 'pointer', mb: '$2' }}
                        href={generateTwitterShareUrl(numberHouses, numberCarbon)}
                        target="_blank"
                        rel="noreferrer"
                        // disabled={disableTwitterShareButton}
                    >
                        <Box
                            css={{
                                mr: '$1'
                            }}
                        >
                            <TwitterLogoIcon />
                        </Box>
                        Share
                    </Button>
                </Flex>

                <Cards />

                <Container size="1" css={{ mt: '$9' }}>
                    <Flex direction="row" align="center" justify="center" gap="5">
                        {/* https://stitches.dev/docs/overriding-styles */}
                        <Box css={{ flexShrink: 1.25 }}>
                            <Image
                                src={vfsgUrl}
                                alt="Project and visualization by Viz for Social Good."
                            />
                        </Box>
                        <Box css={{ flexShrink: 1 }}>
                            <Image
                                src={bunUrl}
                                alt="Build up Nepal logo. It consists of four blue bricks and the name in red. Blue and red are two of the colors of the Nepalese flag."
                            />
                        </Box>
                    </Flex>
                </Container>
                <Footer />
            </Container>
            <Background>
                <filter id="noise">
                    {/* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTurbulence */}
                    {/* a.k.a. Perlin noise (https://en.wikipedia.org/wiki/Perlin_noise) */}
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="4"
                        stitchTiles="stitch"
                    />
                    {/* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix */}
                    {/* https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/values */}
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
            </Background>
        </>
    );
}

export default App;
