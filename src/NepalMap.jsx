import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

// https://www.react-simple-maps.io/docs/getting-started/
function NepalMap() {
    return (
        <ComposableMap>
            <Geographies geography={mapData}>
                {({ geographies }) =>
                    geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)
                }
            </Geographies>
        </ComposableMap>
    );
}

export default NepalMap;
