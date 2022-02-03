import { AxisBottom, AxisTop } from '@visx/axis';
import { extent } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import noop from 'lodash.noop';
import PropTypes from 'prop-types';

import { siTwoFormatter } from './utils';

const domainLineWidth = 1;
const tickLength = 5;
const domainOffset = domainLineWidth / 2;
const datumStrokeWidth = 2;
// const datumStrokeWidth = 1;

function SummaryChart({ summaryData, datum }) {
    // TODO
    console.log(summaryData, datum);

    const dataDomain = extent(summaryData);
    // const dataDomain = [0, max(summaryData)];
    // console.log(dataDomain);

    const xScale = scaleLinear().domain(dataDomain).range([0, 250]);

    return (
        <svg width={250} height={50} overflow="visible">
            <AxisTop
                scale={xScale}
                top={25 + domainOffset}
                tickLength={tickLength}
                tickFormat={siTwoFormatter}
                tickValues={[summaryData[1], summaryData[3]]}
                hideAxisLine
                tickComponent={noop} // Workaround
            />
            <AxisBottom
                scale={xScale}
                top={25 + domainOffset}
                tickLength={tickLength}
                tickFormat={siTwoFormatter}
                tickComponent={({ formattedValue, ...tickProps }) =>
                    formattedValue !== siTwoFormatter(summaryData[2]) && (
                        <text {...tickProps}>{formattedValue}</text>
                    )
                }
                tickValues={[summaryData[0], summaryData[2], summaryData[4]]}
                strokeWidth={domainLineWidth}
            />

            {/* https://airbnb.io/visx/splitlinepath */}
            {/* <line
                x1={xScale(datum)}
                y1={25 + domainOffset}
                x2={xScale(datum)}
                y2={50}
                stroke="black"
                // strokeWidth="8px"
                strokeWidth={`${datumStrokeWidth * 3}px`}
                strokeOpacity={0.1}
                // strokeOpacity={0.15}
                strokeLinecap="square"
            />

            <line
                x1={xScale(datum)}
                y1={25 + domainOffset}
                x2={xScale(datum)}
                y2={50}
                stroke="black"
                strokeWidth={`${datumStrokeWidth}px`}
            /> */}
        </svg>
    );
}

SummaryChart.propTypes = {
    summaryData: PropTypes.arrayOf(PropTypes.number).isRequired,
    datum: PropTypes.number.isRequired
};

export default SummaryChart;
