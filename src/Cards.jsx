import { InfoCircledIcon } from '@radix-ui/react-icons';
import { useAtom } from 'jotai';

import { markersAtom } from './atoms';
import Card from './Card';
import Badge from './components/Badge';
import IconButton from './components/IconButton';
import data from './data.json';
import Grid from './Grid';
import Heading from './Heading';
import Text from './Text';

// https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L1546
// https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L1666
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
// https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L1715
function Cards() {
    const [dataIndices] = useAtom(markersAtom);
    // console.log(dataIndices);

    return (
        <Grid columns="2" gapX="1" gapY="2" align="start">
            {dataIndices.map((idx) => {
                // TODO
                // console.log(data[idx]);

                const projectName = data[idx].name;
                const projectStatus = data[idx].status;
                const projectStartDate = data[idx].start_date_name;
                const projectDescription = data[idx].description;

                const numberHouses = data[idx].houses_built;
                const numberSchools = data[idx].schools;

                const numberBricks = data[idx].bricks_produced;
                const numberCarbon = data[idx].co2_saved;
                const numberJobs = data[idx].total_jobs;

                return (
                    <Card key={idx} css={{ p: '$3' }}>
                        <Heading as="h2" css={{ mb: '$2' }}>
                            {projectName}
                        </Heading>
                        <IconButton>
                            <InfoCircledIcon />
                        </IconButton>
                        <Badge size="1" variant="gray">
                            {projectStatus}
                        </Badge>
                        <Text css={{ lineHeight: '23px' }}>{numberHouses}</Text>
                        <Text css={{ lineHeight: '23px' }}>{numberSchools ?? '-'}</Text>
                    </Card>
                );
            })}
        </Grid>
    );
}

export default Cards;
