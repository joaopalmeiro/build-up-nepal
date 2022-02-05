import { InfoCircledIcon } from '@radix-ui/react-icons';
import useSize from '@react-hook/size';
import { max } from 'd3-array';
import { useAtom } from 'jotai';
import { useRef } from 'react';

import { theme } from '../stitches.config';

import { markersAtom } from './atoms';
import Box from './Box';
import Card from './Card';
import Abbr from './components/Abbr';
import Badge from './components/Badge';
import { Dialog, DialogContent, DialogTrigger } from './components/Dialog';
import IconButton from './components/IconButton';
import Status from './components/Status';
import data from './data.json';
import Flex from './Flex';
import Grid from './Grid';
import Heading from './Heading';
import Image from './Image';
import { districtMinimap } from './minimaps';
import Paragraph from './Paragraph';
import summaryData from './summary.json';
import SummaryChart from './SummaryChart';
import Text from './Text';
import TinyBars from './TinyBars';
import Tooltip from './Tooltip';
import { siTwoFormatter } from './utils';

const maxNumberHouses = max(data, (d) => d.houses_built);
const maxNumberSchools = max(data, (d) => d.schools);

const strugglingStates = ['Struggling', 'Running, Struggling'];

const runningStates = ['Running', 'Recently started', 'Project, Running', ...strugglingStates];

// https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L1546
// https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L1666
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
// https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L1715
// https://mastery.games/post/grid-item-placement/#Order
// https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation#examples
function Cards() {
    const [dataIndices] = useAtom(markersAtom);
    // console.log(dataIndices);
    // console.log(maxNumberHouses, maxNumberSchools);

    // https://www.npmjs.com/package/@react-hook/size
    // https://maxschmitt.me/posts/react-refs-loops/
    const target = useRef(null);
    const [width] = useSize(target);

    // console.log(theme);

    const paddingSize = parseFloat(theme.space[3].value) * 2;
    const leftDateSize = parseFloat(theme.fontSizes[2].value);
    const gapSize = parseFloat(theme.space[3].value);
    const gridGapSize = parseFloat(theme.space[1].value);
    const extraLeftPaddingSize = leftDateSize + gapSize;
    const halfWidth = width ? width / 2 : 0;
    const chartWidth = width ? halfWidth - gridGapSize - paddingSize - extraLeftPaddingSize : 0;
    // console.log(width, paddingSize, chartWidth);

    return (
        <Grid
            columns="2"
            gapX="1"
            gapY="2"
            // align="start"
            // align="stretch"
            align="end"
            ref={target}
        >
            {dataIndices.map((idx, i) => {
                // console.log(data[idx]);

                const projectName = data[idx].name;
                const projectStatus = data[idx].status;
                const projectStartDate = data[idx].start_date_name;
                const projectDescription = data[idx].description;
                const projectType = data[idx].type;

                // https://en.wikipedia.org/wiki/Nepal#Administrative_divisions
                // Province (7) > District (77)
                const { district } = data[idx];
                // https://en.wikipedia.org/wiki/Madhesh_Province
                const province = data[idx].province_name;

                const numberHouses = data[idx].houses_built;
                const numberSchools = data[idx].schools;

                const numberBricks = data[idx].bricks_produced ?? 0;
                const numberCarbon = data[idx].co2_saved;
                const numberJobs = data[idx].total_jobs;

                return (
                    <Card
                        key={idx}
                        variant={i === dataIndices.length - 1 ? 'loContrast' : 'gray'}
                        css={{ p: '$3', order: -i }}
                    >
                        <Flex gap="3" justify="center">
                            <Text
                                variant="gray"
                                size="2"
                                css={{
                                    writingMode: 'vertical-rl',
                                    textOrientation: 'upright',
                                    textAlign: 'start',
                                    // textAlign: 'center',
                                    fontFamily: '$mono'
                                }}
                            >
                                {projectStartDate}
                            </Text>

                            <Flex direction="column" gap="3">
                                <Heading as="h2" size="1" css={{ mb: '$1' }}>
                                    {projectName}
                                </Heading>

                                <Flex justify="between" align="center">
                                    {/* https://design-system.modulz-deploys.com/#badge */}
                                    {/* https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L1017 */}
                                    <Badge
                                        size="2"
                                        // size="1"
                                        variant="gold"
                                    >
                                        {runningStates.includes(projectStatus) && (
                                            <Box css={{ mr: '$1' }}>
                                                <Status
                                                    size="1"
                                                    variant="gold"
                                                    css={{
                                                        borderRadius: strugglingStates.includes(
                                                            projectStatus
                                                        )
                                                            ? 'unset'
                                                            : '$round'
                                                    }}
                                                />
                                            </Box>
                                        )}
                                        {projectStatus}
                                    </Badge>

                                    <Dialog
                                    // open
                                    >
                                        <DialogTrigger asChild>
                                            <IconButton>
                                                <InfoCircledIcon />
                                            </IconButton>
                                        </DialogTrigger>
                                        {/* https://www.radix-ui.com/docs/primitives/components/dialog#title */}
                                        <DialogContent
                                            aria-label={`Description of the enterprise/project ${projectName}`}
                                        >
                                            <Heading as="h2" size="1" css={{ mb: '$3' }}>
                                                {projectName}
                                            </Heading>
                                            <Flex direction="column" gap="2" align="start">
                                                <Badge
                                                    size="2"
                                                    // variant="gray"
                                                    variant="gold"
                                                >
                                                    {projectType}
                                                </Badge>
                                                <Paragraph
                                                    variant={
                                                        projectDescription ? 'contrast' : 'gray'
                                                    }
                                                >
                                                    {projectDescription
                                                        ? projectDescription
                                                        : 'No further description available for this enterprise/project.'}
                                                </Paragraph>
                                            </Flex>
                                        </DialogContent>
                                    </Dialog>
                                </Flex>

                                <Flex direction="column" gap="1">
                                    <Box>
                                        <Heading as="h3">Location</Heading>
                                        {/* https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L511 */}
                                        <Text as="p" css={{ lineHeight: '23px' }}>
                                            {district}{' '}
                                            <Text variant="gray" css={{ display: 'unset' }}>
                                                (
                                                {province === 'Province No. 2' ? (
                                                    <Abbr title="Former Province No. 2">
                                                        Madhesh Province
                                                    </Abbr>
                                                ) : (
                                                    province
                                                )}
                                                )
                                            </Text>
                                        </Text>
                                    </Box>

                                    <Image
                                        src={districtMinimap[district]}
                                        alt={`${province} map silhouette with ${district} district highlighted.`}
                                        css={{
                                            width: chartWidth / 1.5,
                                            height: chartWidth / 1.5,
                                            alignSelf: 'center',
                                            transform: `translate(-${extraLeftPaddingSize / 2}px)`
                                        }}
                                    />
                                </Flex>

                                <Flex direction="column" gap="1">
                                    {/* https://en.wikipedia.org/wiki/Numero_sign */}
                                    <Heading as="h3">No. houses and schools built</Heading>
                                    <Flex justify="center" gap="7">
                                        <Flex align="center" gap="2">
                                            <TinyBars
                                                value={numberHouses}
                                                maxValue={maxNumberHouses}
                                                barWidth={parseFloat(theme.sizes[4].value)}
                                            />
                                            <Text
                                                size="4"
                                                css={{
                                                    lineHeight: 1.5,
                                                    fontWeight: numberHouses ? '$2' : '$1'
                                                }}
                                            >
                                                {numberHouses ?? 'N/A'}
                                            </Text>
                                        </Flex>

                                        <Flex align="center" gap="2">
                                            <TinyBars
                                                value={numberSchools}
                                                maxValue={maxNumberSchools}
                                                barWidth={parseFloat(theme.sizes[6].value)}
                                            />
                                            <Text
                                                size="4"
                                                css={{
                                                    lineHeight: 1.5,
                                                    fontWeight: numberSchools ? '$2' : '$1'
                                                }}
                                            >
                                                {numberSchools ?? 'N/A'}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Flex>

                                <Flex direction="column" gap="2">
                                    <Tooltip content="Five-number summary with the value for this project highlighted">
                                        <Heading as="h3" css={{ cursor: 'help' }}>
                                            Bricks produced
                                        </Heading>
                                    </Tooltip>
                                    <SummaryChart
                                        summaryData={summaryData.bricks}
                                        datum={numberBricks}
                                        width={chartWidth}
                                        padding={extraLeftPaddingSize / 2}
                                    />
                                    <Text
                                        size="2"
                                        as="p"
                                        css={{
                                            ta: 'right',
                                            //  lineHeight: 1.5
                                            lineHeight: 1
                                        }}
                                    >
                                        {siTwoFormatter(summaryData.bricks[1])}{' '}
                                        <Text size="2" variant="gray" css={{ display: 'unset' }}>
                                            (1st Qu.)
                                        </Text>
                                        , {siTwoFormatter(summaryData.bricks[2])}{' '}
                                        <Text size="2" variant="gray" css={{ display: 'unset' }}>
                                            (Median)
                                        </Text>
                                        , {siTwoFormatter(summaryData.bricks[3])}{' '}
                                        <Text size="2" variant="gray" css={{ display: 'unset' }}>
                                            (3rd Qu.)
                                        </Text>
                                    </Text>
                                </Flex>

                                <Flex direction="column" gap="2">
                                    <Heading as="h3">
                                        Tons of <Abbr title="Carbon dioxide">CO₂</Abbr> saved
                                    </Heading>
                                    <SummaryChart
                                        summaryData={summaryData.carbon}
                                        datum={numberCarbon}
                                        width={chartWidth}
                                        padding={extraLeftPaddingSize / 2}
                                    />
                                    <Text size="2" as="p" css={{ ta: 'right', lineHeight: 1 }}>
                                        {siTwoFormatter(summaryData.carbon[1])},{' '}
                                        {siTwoFormatter(summaryData.carbon[2])},{' '}
                                        {siTwoFormatter(summaryData.carbon[3])}
                                    </Text>
                                </Flex>

                                <Flex direction="column" gap="2">
                                    <Heading as="h3">Total jobs</Heading>
                                    <SummaryChart
                                        summaryData={summaryData.jobs}
                                        datum={numberJobs}
                                        width={chartWidth}
                                        padding={extraLeftPaddingSize / 2}
                                    />
                                    <Text size="2" as="p" css={{ ta: 'right', lineHeight: 1 }}>
                                        {siTwoFormatter(summaryData.jobs[1])},{' '}
                                        {siTwoFormatter(summaryData.jobs[2])},{' '}
                                        {siTwoFormatter(summaryData.jobs[3])}
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Card>
                );
            })}
        </Grid>
    );
}

export default Cards;
