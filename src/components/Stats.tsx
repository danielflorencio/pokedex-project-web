import { Box, Divider, Progress, Stack, Text } from "@chakra-ui/react";

type PokemonStatsProps = {
    hp?: number,
    att?: number, 
    def?: number, 
    satk?: number,
    sdef?: number, 
    spd?: number
}

export default function Stats({hp, att, def, satk, sdef, spd}: PokemonStatsProps){
    return(
        <Box width={'90%'} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
            <Text>Base Stats</Text>
            <Box display={'flex'} width='100%' justifyContent={'center'} alignItems={'center'}>
                <Box>
                    <Text fontWeight={'bold'}>HP</Text>
                    <Text fontWeight={'bold'}>ATK</Text>
                    <Text fontWeight={'bold'}>DEF</Text>
                    <Text fontWeight={'bold'}>SATK</Text>
                    <Text fontWeight={'bold'}>SDEF</Text>
                    <Text fontWeight={'bold'}>SPD</Text>
                </Box>
                <Divider orientation='vertical' mx={5} height={'100%'} borderColor={'black'}/>
                <Box width={'100%'}>
                    <Box>
                        <Stack direction={'row'} align={'center'} spacing={6}>
                            <Text>{hp}</Text>
                            <Progress colorScheme='green' height='4px' value={hp} borderRadius={4} width={'80%'} />
                        </Stack>
                    </Box>
                    <Box>
                        <Stack direction={'row'} align={'center'} spacing={6}>
                            <Text >{att}</Text>
                            <Progress colorScheme='green' height='4px' value={att} borderRadius={4} width={'80%'} />
                        </Stack>
                    </Box>
                    <Box>
                        <Stack direction={'row'} align={'center'} spacing={6}>
                            <Text>{def}</Text>
                            <Progress colorScheme='green' height='4px' value={def} borderRadius={4} width={'80%'} />
                        </Stack>
                    </Box>
                        <Stack direction={'row'} align={'center'} spacing={6}>
                            <Text >{satk}</Text>
                            <Progress colorScheme='green' height='4px' value={satk} borderRadius={4} width={'80%'} />
                        </Stack>
                    <Box>
                        <Stack direction={'row'} align={'center'} spacing={6}>
                            <Text >{sdef}</Text>
                            <Progress colorScheme='green' height='4px' value={sdef} borderRadius={4} width={'80%'} />
                        </Stack>
                    </Box>
                    <Box>
                        <Stack direction={'row'} align={'center'} spacing={6}>
                            <Text >{spd}</Text>
                            <Progress colorScheme='green' height='4px' value={spd} borderRadius={4} width={'80%'} />
                        </Stack>
                    </Box>
                </Box>            
            </Box>
        </Box>
    )
}