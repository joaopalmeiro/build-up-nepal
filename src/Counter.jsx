import Abbr from './components/Abbr';
import Alert from './components/Alert';
import Flex from './Flex';
import Paragraph from './Paragraph';
import Text from './Text';

// https://www.buildupnepal.com/project-map/
// https://climate.mit.edu/ask-mit/how-much-ton-carbon-dioxide
const intro = 'In the enterprises/projects you have already seen:';

// https://css-tricks.com/snippets/css/prevent-superscripts-and-subscripts-from-affecting-line-height/
// https://www.compart.com/en/unicode/U+2082
function Counter() {
    return (
        <>
            <Paragraph variant="gray">{intro}</Paragraph>
            <Alert>
                <Flex align="center" gap="2">
                    <Text size="3" css={{ fontWeight: '$2' }}>
                        TODO
                    </Text>
                    <Text size="2" variant="gray">
                        tons of <Abbr title="Carbon dioxide">CO₂</Abbr> saved
                    </Text>
                </Flex>
            </Alert>
            <Alert>
                <Flex align="center" gap="2">
                    <Text size="3" css={{ fontWeight: '$2' }}>
                        TODO
                    </Text>
                    <Text size="2" variant="gray">
                        houses built
                    </Text>
                </Flex>
            </Alert>
        </>
    );
}

export default Counter;
