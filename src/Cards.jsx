import { useAtom } from 'jotai';

import { markersAtom } from './atoms';
import Card from './Card';
import Badge from './components/Badge';
import data from './data.json';
import Grid from './Grid';
import Heading from './Heading';

// https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L1546
function Cards() {
    const [dataIndices] = useAtom(markersAtom);
    // console.log(dataIndices);

    return (
        <Grid columns="2" gapX="1" gapY="2" align="start">
            {dataIndices.map((idx) => {
                // TODO

                const projectName = data[idx].name;
                const projectStatus = data[idx].status;

                return (
                    <Card key={idx} css={{ p: '$3' }}>
                        <Heading as="h2" css={{ mb: '$2' }}>
                            {projectName}
                        </Heading>
                        <Badge size="1" variant="gray">
                            {projectStatus}
                        </Badge>
                    </Card>
                );
            })}
        </Grid>
    );
}

export default Cards;
