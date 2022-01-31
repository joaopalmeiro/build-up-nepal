import { useAtom } from 'jotai';

import { markersAtom } from './atoms';
import Card from './Card';
import Badge from './components/Badge';
import data from './data.json';
import Grid from './Grid';

function Cards() {
    const [dataIndices] = useAtom(markersAtom);
    // console.log(dataIndices);

    return (
        <Grid columns="2" gapX="1" gapY="2">
            {dataIndices.map((idx) => {
                // TODO

                const projectStatus = data[idx].status;

                return (
                    <Card key={idx}>
                        <Badge size="2" variant="gray">
                            {projectStatus}
                        </Badge>
                    </Card>
                );
            })}
        </Grid>
    );
}

export default Cards;
