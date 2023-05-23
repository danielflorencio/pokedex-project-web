import { Box, Divider, Progress, Stack, Text } from "@chakra-ui/react";
import { MyPokemon } from "../data/pokemons";

console.log('pokemon color ', MyPokemon.colorTheme)

export default function Stats(){
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
                <Divider orientation='vertical' mx={5} height={'100px'} borderColor={'black'}/>
                <Box width={'100%'}>
                    <Box>
                        <Stack direction={'row'} align={'center'} spacing={6}>
                            <Text >{MyPokemon.hp}</Text>
                            <Progress colorScheme='green' height='4px' value={MyPokemon.hp} borderRadius={4} width={'80%'} />
                        </Stack>
                    </Box>
                    <Box>
                        <Stack direction={'row'} align={'center'} spacing={6}>
                            <Text >{MyPokemon.att}</Text>
                            <Progress colorScheme='green' height='4px' value={MyPokemon.att} borderRadius={4} width={'80%'} />
                        </Stack>
                    </Box>
                    <Box>
                        <Stack direction={'row'} align={'center'} spacing={6}>
                            <Text >{MyPokemon.def}</Text>
                            <Progress colorScheme='green' height='4px' value={MyPokemon.def} borderRadius={4} width={'80%'} />
                        </Stack>
                    </Box>
                        <Stack direction={'row'} align={'center'} spacing={6}>
                            <Text >{MyPokemon.satk}</Text>
                            <Progress colorScheme='green' height='4px' value={MyPokemon.satk} borderRadius={4} width={'80%'} />
                        </Stack>
                    <Box>
                        <Stack direction={'row'} align={'center'} spacing={6}>
                            <Text >{MyPokemon.sdef}</Text>
                            <Progress colorScheme='green' height='4px' value={MyPokemon.sdef} borderRadius={4} width={'80%'} />
                        </Stack>
                    </Box>
                    <Box>
                        <Stack direction={'row'} align={'center'} spacing={6}>
                            <Text >{MyPokemon.spd}</Text>
                            <Progress colorScheme='green' height='4px' value={MyPokemon.spd} borderRadius={4} width={'80%'} />
                        </Stack>
                    </Box>
                </Box>            
            </Box>
        </Box>
    )
}