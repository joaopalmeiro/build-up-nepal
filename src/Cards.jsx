import { InfoCircledIcon } from '@radix-ui/react-icons';
import { useAtom } from 'jotai';

import { markersAtom } from './atoms';
import Box from './Box';
import Card from './Card';
import Abbr from './components/Abbr';
import Badge from './components/Badge';
import { Dialog, DialogContent, DialogTrigger } from './components/Dialog';
import IconButton from './components/IconButton';
import data from './data.json';
import Flex from './Flex';
import Grid from './Grid';
import Heading from './Heading';
import Paragraph from './Paragraph';
import summaryData from './summary.json';
import SummaryChart from './SummaryChart';
import Text from './Text';

// https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L1546
// https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L1666
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
// https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L1715
// https://mastery.games/post/grid-item-placement/#Order
// https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation#examples
function Cards() {
    const [dataIndices] = useAtom(markersAtom);
    // console.log(dataIndices);

    return (
        <Grid
            columns="2"
            gapX="1"
            gapY="2"
            // align="start"
            // align="stretch"
            align="end"
        >
            {dataIndices.map((idx, i) => {
                // TODO
                // console.log(data[idx]);

                const projectName = data[idx].name;
                const projectStatus = data[idx].status;
                const projectStartDate = data[idx].start_date_name;
                const projectDescription = data[idx].description;

                // https://en.wikipedia.org/wiki/Nepal#Administrative_divisions
                // Province (7) > District (77)
                const { district } = data[idx];
                // https://en.wikipedia.org/wiki/Madhesh_Province
                const province = data[idx].province_name;

                const numberHouses = data[idx].houses_built;
                const numberSchools = data[idx].schools;

                const numberBricks = data[idx].bricks_produced;
                const numberCarbon = data[idx].co2_saved;
                const numberJobs = data[idx].total_jobs;

                return (
                    <Card
                        key={idx}
                        variant={i === dataIndices.length - 1 ? 'loContrast' : 'gray'}
                        css={{ p: '$3', order: -i }}
                    >
                        <Flex gap="3">
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
                            <Box>
                                <Heading as="h2" size="1" css={{ mb: '$2' }}>
                                    {projectName}
                                </Heading>

                                <Badge
                                    size="2"
                                    // size="1"
                                    variant="gray"
                                >
                                    {projectStatus}
                                </Badge>

                                {projectDescription && (
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
                                            <Paragraph>{projectDescription}</Paragraph>
                                        </DialogContent>
                                    </Dialog>
                                )}

                                <Heading as="h3">Location</Heading>
                                <Text>
                                    {district} (
                                    {province === 'Province No. 2' ? (
                                        <Abbr title="Former Province No. 2">Madhesh Province</Abbr>
                                    ) : (
                                        province
                                    )}
                                    )
                                </Text>

                                <Text css={{ lineHeight: '23px' }}>{numberHouses ?? '-'}</Text>
                                <Text css={{ lineHeight: '23px' }}>{numberSchools ?? '-'}</Text>

                                <Heading as="h3">Bricks produced</Heading>
                                <SummaryChart
                                    summaryData={summaryData.bricks}
                                    datum={numberBricks}
                                />

                                <Heading as="h3">
                                    Tons of <Abbr title="Carbon dioxide">CO₂</Abbr> saved
                                </Heading>
                                <SummaryChart
                                    summaryData={summaryData.carbon}
                                    datum={numberCarbon}
                                />

                                <Heading as="h3">Total jobs</Heading>
                                <SummaryChart summaryData={summaryData.jobs} datum={numberJobs} />
                            </Box>
                        </Flex>
                    </Card>
                );
            })}
        </Grid>
    );
}

export default Cards;
