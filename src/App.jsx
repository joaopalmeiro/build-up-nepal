import { useAtomValue, useUpdateAtom } from 'jotai/utils';
import isEmpty from 'lodash.isempty';
import sample from 'lodash.sample';

import { globalCss, styled } from '../stitches.config';

import { availableDataAtom, markersAtom } from './atoms';
import Button from './Button';
import Container from './Container';
import Flex from './Flex';
import Grid from './Grid';
import NepalMap from './NepalMap';

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

    // https://jotai.org/docs/utils/use-update-atom
    // https://jaketrent.com/post/remove-array-element-without-mutating
    const setMarkers = useUpdateAtom(markersAtom);
    const availableData = useAtomValue(availableDataAtom);

    // console.log(availableData, isEmpty(availableData));

    const addMarker = () =>
        setMarkers((d) => {
            const idx = sample(availableData);

            // console.log(idx, data[idx]);

            return [idx, ...d];
        });

    return (
        <>
            {/* Rendered: {++useRef(0).current} */}
            <Container size={2}>
                <Flex direction="column" gap={1} align="center">
                    <NepalMap />
                    <Button size={3} onClick={addMarker} disabled={isEmpty(availableData)}>
                        Add
                    </Button>
                </Flex>
                <Grid columns={2} gapX={1} gapY={2}>
                    {/* https://cssreference.io/property/grid-auto-flow/ */}
                </Grid>
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
