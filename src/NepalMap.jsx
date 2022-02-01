import { geoEqualEarth, geoPath } from 'd3-geo';
import { useAtom } from 'jotai';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

import { theme } from '../stitches.config';

import { markersAtom } from './atoms';
import data from './data.json';
import mapData from './map.json';
import { getGoogleMapsUrl } from './utils';

const defaultWidth = 800; // px

// https://www.react-simple-maps.io/docs/getting-started/
function NepalMap() {
    const [dataIndices] = useAtom(markersAtom);
    // console.log(dataIndices, data[dataIndices[0]]);

    // https://stitches.dev/docs/theming#theme-object
    // console.log(theme);

    // https://stackoverflow.com/a/40940028
    // https://www.react-simple-maps.io/docs/composable-map/
    // https://github.com/d3/d3-geo#projection_fitExtent
    // https://github.com/d3/d3-geo#projection_fitWidth
    // https://github.com/d3/d3-geo/blob/v3.0.1/src/projection/fit.js
    // https://github.com/d3/d3-geo/blob/v3.0.1/src/projection/index.js
    // https://proj.org/operations/projections/index.html
    // https://proj.org/operations/projections/eqearth.html
    // Mapshaper: `-proj eqearth`
    const projection = geoEqualEarth()
        // .fitExtent(
        //     [
        //         [0, 0], // Padding
        //         [defaultWidth, defaultHeight] // [Width, Height]
        //     ],
        //     mapData
        // )
        .fitWidth(defaultWidth, mapData);

    // https://github.com/d3/d3-geo#path_bounds
    const mapBounds = geoPath(projection).bounds(mapData);
    // https://stackoverflow.com/a/46775129
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#ignoring_some_returned_values
    const [, [, y1]] = mapBounds;
    const mapHeight = y1;
    // const mapHeight = 600;

    return (
        // https://www.buildupnepal.com/project-map/
        // https://www.react-simple-maps.io/docs/composable-map/
        // https://github.com/zcreativelabs/react-simple-maps/blob/v2.2.0/src/components/MapProvider.js#L27
        <ComposableMap projection={projection} width={defaultWidth} height={mapHeight}>
            <Geographies geography={mapData}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        // https://github.com/zcreativelabs/react-simple-maps/blob/v2.2.0/src/components/Geography.js#L53
                        // https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale#use-cases
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            stroke={theme.colors.mauve9.value}
                            // stroke={theme.colors.loContrast.value}
                            // strokeWidth={0.5}
                            strokeWidth={0.25}
                            fill={theme.colors.hiContrast.value}
                        />
                    ))
                }
            </Geographies>

            {dataIndices.map((idx, i) => {
                const { name, longitude, latitude } = data[idx];

                // Coordinates: [lon, lat]
                return (
                    // https://github.com/zcreativelabs/react-simple-maps/blob/v2.2.0/src/components/Marker.js#L60
                    <Marker
                        key={`${name}-${longitude}-${latitude}`}
                        coordinates={[longitude, latitude]}
                    >
                        <a
                            href={getGoogleMapsUrl(longitude, latitude)}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {/* https://jakearchibald.github.io/svgomg/ */}
                            {/* https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin */}
                            {/* https://www.react-simple-maps.io/examples/custom-markers/ */}
                            {/* https://www.react-simple-maps.io/examples/basic-markers/ */}
                            {/* https://www.react-simple-maps.io/docs/marker/ */}
                            {i === dataIndices.length - 1 ? (
                                // https://caniuse.com/vector-effect
                                // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/vector-effect
                                // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering
                                // https://en.wikipedia.org/wiki/Flag_of_Nepal
                                <path
                                    // Source: img/flag_nepal_sun_1px_svgo.svg
                                    d="M.275701.275701.0669782.25.193536.417445 0 .5l.193536.081776-.1265578.167445L.275701.72352.25.932632.417445.806075.5 1 .581776.806075.75.933022.724299.724299l.208723.02609L.806464.582944 1 .501168.806464.418614.933022.251168.724299.27648.75.0677569.582555.194315.5 0 .418224.193536.25.0669781.275701.275701Z"
                                    fill={theme.colors.loContrast.value}
                                    transform="translate(-11 -11) scale(22)"
                                    // transform="translate(-10 -10) scale(20)"
                                    vectorEffect="non-scaling-stroke"
                                    stroke={theme.colors.hiContrast.value}
                                    strokeWidth={0.5}
                                />
                            ) : (
                                <circle
                                    r={4}
                                    // r={5}
                                    // fill="#F53"
                                    fill={theme.colors.red9.value}
                                    // stroke="white"
                                    stroke={theme.colors.hiContrast.value}
                                    strokeWidth={0.5}
                                />
                            )}
                        </a>
                    </Marker>
                );
            })}
        </ComposableMap>
    );
}

export default NepalMap;
