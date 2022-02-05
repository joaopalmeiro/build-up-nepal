import { scaleLinear } from 'd3-scale';
import PropTypes from 'prop-types';

import { theme } from '../stitches.config';

import Tooltip from './Tooltip';

const chartHeight = parseFloat(theme.sizes[8].value);

function TinyBars({ value, maxValue, barWidth }) {
    // https://www.d3-graph-gallery.com/graph/barplot_basic.html
    const yScale = scaleLinear().domain([0, maxValue]).range([chartHeight, 0]);

    const halfBarWidth = barWidth / 2;
    const cursor = value ? 'help' : 'unset';

    const chartWidth = value ? barWidth + halfBarWidth : barWidth;

    const svgChart = (
        <svg width={chartWidth} height={chartHeight} cursor={cursor}>
            <rect
                width={barWidth}
                y={yScale(maxValue)}
                height={chartHeight - yScale(maxValue)}
                fill={value ? theme.colors.red6.value : theme.colors.mauve6.value}
            ></rect>
            {value && (
                <rect
                    x={halfBarWidth}
                    width={barWidth}
                    y={yScale(value)}
                    height={chartHeight - yScale(value)}
                    fill={theme.colors.red11.value}
                ></rect>
            )}
        </svg>
    );

    return (
        <>
            {value ? (
                <Tooltip content={`${value} vs. ${maxValue} (maximum value)`}>{svgChart}</Tooltip>
            ) : (
                svgChart
            )}
        </>
    );
}

TinyBars.propTypes = {
    maxValue: PropTypes.number.isRequired,
    value: PropTypes.number,
    barWidth: PropTypes.number.isRequired
};

export default TinyBars;
