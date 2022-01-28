import { styled } from '../stitches.config';

import Button from './Button';
import Container from './Container';
import Flex from './Flex';
import NepalMap from './NepalMap';

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
    return (
        <>
            <Container size={2}>
                <Flex direction="column" gap={1} align="center">
                    <NepalMap />
                    <Button size={3}>Add</Button>
                </Flex>
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
