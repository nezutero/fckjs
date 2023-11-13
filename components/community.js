import {
    Box,
    Grid,
    chakra,
    Text,
    Image,
    Flex,
    GridItem,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';

function StatsCard(props) {
    const { title, stat } = props;
    return (
        <Stat
            px={{ base: 4, md: 15 }}
            py={10}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.300', 'gray.900')}
            rounded={'3xl'}
            borderRadius={'3xl'}
        >
            <StatLabel fontSize={'md'} fontWeight={'medium'} isTruncated>
                {title}
            </StatLabel>
            <StatNumber fontSize={'3xl'} fontWeight={'regular'}>
                {stat}
            </StatNumber>
        </Stat>
    );
}

export default function Stats() {
    return (
        <Box
            fontFamily={"'Etna', sans-serif"}
            py={12}
            rounded={'3xl'}
            w={'100%'}
        >
            <Text
                as = "a"
                href = "/"
                color={useColorModeValue('yellow.300', 'yellow.600')}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('yellow.600', 'yellow.900')}
                p={3}
                alignSelf={'flex-start'}
                rounded={'2xl'}
                w={'fit-content'}
            >
                OUR ECOSYSTEM →
            </Text>
            <chakra.h1 py={3} textAlign={'left'} fontSize={'4xl'} fontWeight={'bold'}>
                What is our company doing?
            </chakra.h1>
            <Flex
                w={'100%'}
                justifyContent={'space-between'}
                flexDirection={{ base: 'column', md: 'row' }}
                alignItems={'center'}
            >
                <Box
                    w={{ base: '100%', md: '45%' }}
                    pb={{ base: 12, md: 0 }}
                >
                    <Image
                        src="/images/gold.jpg"
                        rounded={'3xl'}
                        alt={'stats image'}
                        border={'1px solid'}
                        borderColor={useColorModeValue('gray.300', 'gray.900')}
                        objectFit={'cover'}
                        w={'100%'}
                        h={{ base: 80, md: 'md' }}
                    />
                </Box>

                <Grid
                    borderRadius={'5xl'}
                    gap={4}
                    w={{ base: '100%', md: '50%' }}
                    columns={1}
                >
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 4 }} >
                        <StatsCard title={'We serve'} stat={'50,000 people'} />
                    </GridItem>
                    <GridItem rowSpan={0} colSpan={{ base: 0, md: 4 }}>
                        <StatsCard title={'In'} stat={'30 different countries'} />
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 4 }} >
                        <StatsCard title={'We serve'} stat={'50,000 people'} />
                    </GridItem>
                </Grid>
            </Flex>
        </Box>
    );
};


