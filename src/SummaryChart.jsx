import { AxisBottom, AxisTop } from '@visx/axis';
import { bottomTickLabelProps } from '@visx/axis/lib/axis/AxisBottom';
import { extent, max } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import noop from 'lodash.noop';
import PropTypes from 'prop-types';

import { theme } from '../stitches.config';

import { getFontStyleHeight, siTwoFormatter } from './utils';

const domainLineWidth = 1;
const tickLength = 5;
// const domainOffset = domainLineWidth / 2;
const datumStrokeWidth = 2;
// const datumStrokeWidth = 1;

const tickLabelProps = {
    ...bottomTickLabelProps(),
    fontFamily: theme.fonts.sans.value,
    fontSize: theme.fontSizes[1].value,
    // fill: theme.colors.hiContrast.value
    fill: theme.colors.mauve11.value
};

const textLabelProps = {
    textAnchor: 'middle',
    fontFamily: theme.fonts.sans.value,
    dy: '-0.25em',
    fontSize: theme.fontSizes[1].value,
    fill: theme.colors.hiContrast.value
};

function SummaryChart({ summaryData, datum, width, padding }) {
    // console.log(summaryData, datum);
    // console.log(tickLabelProps);

    const dataDomain = extent(summaryData);
    // const dataDomain = [0, max(summaryData)];
    // console.log(dataDomain);

    const xScale = scaleLinear().domain(dataDomain).range([0, width]);

    const minTickLabelHeight = getFontStyleHeight(
        siTwoFormatter(summaryData[0]),
        `${tickLabelProps.fontSize} ${tickLabelProps.fontFamily}`
    );
    const maxTickLabelHeight = getFontStyleHeight(
        siTwoFormatter(summaryData[4]),
        `${tickLabelProps.fontSize} ${tickLabelProps.fontFamily}`
    );
    const tickLabelHeight = max([minTickLabelHeight, maxTickLabelHeight]);

    const valueLabelHeight = getFontStyleHeight(
        siTwoFormatter(datum),
        `${textLabelProps.fontSize} ${textLabelProps.fontFamily}`
    );

    const tickLabelSpacing = parseFloat(tickLabelProps.dy) * parseFloat(tickLabelProps.fontSize);
    const valueLabelSpacing = Math.abs(
        parseFloat(textLabelProps.dy) * parseFloat(textLabelProps.fontSize)
    );

    const bottomAxisHeight = tickLabelHeight + tickLabelSpacing + tickLength + domainLineWidth;
    const topAxisHeight = tickLength + domainLineWidth;
    const labelHeight = valueLabelHeight + valueLabelSpacing;
    const paddingY = topAxisHeight * 2 + labelHeight;

    const chartHeight = bottomAxisHeight + paddingY;

    // console.log(tickLabelSpacing, tickLabelHeight, chartHeight);

    return (
        <svg
            width={width}
            height={chartHeight}
            overflow="visible"
            // overflow="hidden"
            transform={`translate(-${padding}, 0)`}
        >
            <AxisTop
                scale={xScale}
                top={paddingY}
                tickLength={tickLength}
                tickValues={[summaryData[1], summaryData[3]]}
                hideAxisLine
                tickComponent={noop} // Workaround
                tickStroke={theme.colors.mauve11.value}
            />

            <AxisBottom
                scale={xScale}
                top={paddingY}
                tickLength={tickLength}
                tickFormat={siTwoFormatter}
                tickComponent={({ formattedValue, ...tickProps }) =>
                    formattedValue !== siTwoFormatter(summaryData[2]) && (
                        <text {...tickProps}>{formattedValue}</text>
                    )
                }
                tickValues={[summaryData[0], summaryData[2], summaryData[4]]}
                strokeWidth={domainLineWidth}
                tickLabelProps={() => tickLabelProps}
                tickStroke={theme.colors.mauve11.value}
                stroke={theme.colors.mauve11.value}
            />

            {/* https://airbnb.io/visx/splitlinepath */}
            <line
                x1={xScale(datum)}
                x2={xScale(datum)}
                y1={valueLabelHeight + valueLabelSpacing}
                y2={topAxisHeight * 3 + labelHeight}
                stroke={theme.colors.indigo11.value}
                // stroke="black"
                // strokeWidth="8px"
                strokeWidth={`${datumStrokeWidth * 3}px`}
                strokeOpacity={0.1}
                // strokeOpacity={0.15}
                strokeLinecap="square"
            />

            <line
                x1={xScale(datum)}
                x2={xScale(datum)}
                y1={valueLabelHeight + valueLabelSpacing}
                y2={topAxisHeight * 3 + labelHeight}
                // stroke="black"
                stroke={theme.colors.indigo11.value}
                strokeWidth={`${datumStrokeWidth}px`}
                strokeLinecap="butt"
            />

            <text x={xScale(datum)} y={valueLabelHeight + valueLabelSpacing} {...textLabelProps}>
                {siTwoFormatter(datum)}
            </text>
        </svg>
    );
}

SummaryChart.propTypes = {
    summaryData: PropTypes.arrayOf(PropTypes.number).isRequired,
    datum: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    padding: PropTypes.number.isRequired
};

export default SummaryChart;
