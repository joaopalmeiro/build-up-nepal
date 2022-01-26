import { geoEqualEarth, geoPath } from 'd3-geo';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

import data from './data.json';
import mapData from './map.json';

const defaultWidth = 800; // px

// https://www.react-simple-maps.io/docs/getting-started/
function NepalMap() {
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

    // TODO
    const markers = [data[0], data[1], data[30]];

    return (
        // https://www.buildupnepal.com/project-map/
        // https://www.react-simple-maps.io/docs/composable-map/
        // https://www.react-simple-maps.io/examples/basic-markers/
        // https://github.com/zcreativelabs/react-simple-maps/blob/v2.2.0/src/components/MapProvider.js#L27
        <ComposableMap projection={projection} width={defaultWidth} height={mapHeight}>
            <Geographies geography={mapData}>
                {({ geographies }) =>
                    geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)
                }
            </Geographies>
            {/* https://www.react-simple-maps.io/docs/marker/ */}
            {/* https://www.react-simple-maps.io/examples/basic-markers/ */}
            {markers.map(({ longitude, latitude }) => (
                // Coordinates: [lon, lat]
                <Marker key={`${longitude}-${latitude}`} coordinates={[longitude, latitude]}>
                    <circle r={5} fill="#F53" stroke="white" strokeWidth={0.5} />
                </Marker>
            ))}
        </ComposableMap>
    );
}

export default NepalMap;
