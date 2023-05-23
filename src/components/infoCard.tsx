import { Box, Text } from "@chakra-ui/react";
import { MyPokemon } from "../data/pokemons";
import {ChevronLeftIcon} from '@chakra-ui/icons'
export default function infoCard(){
    return(
        <Box height={400} width={280} bg={`${MyPokemon.colorTheme}`} padding={2} borderRadius={'8px'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
            <Box display={'flex'} justifyContent={'space-between'} paddingTop={2} pr={2} >
                <Box display={'flex'} gap={3}>
                <ChevronLeftIcon width={'32px'} height={'32px'}/>
                <Text>{MyPokemon.name}</Text>
                </Box>
                <Text>{MyPokemon.id}</Text>
            </Box>

            <Box></Box>
            
            <Box bg={'white'} height={'60%'} borderRadius={'8px'}>
                <Box>
                    <Box>
                        PokeType 1
                        PokeType 2
                    </Box>
                    <Text>About</Text>
                    <Box>
                        <Box>
                            Weight
                        </Box>
                        <Box>
                            Weight
                        </Box>
                        <Box>
                            Moves
                        </Box>
                    </Box>
                </Box>

                <Box>
                    <Text>Description</Text>
                </Box>

                <Box>
                    Base Stats
                </Box>
            </Box>
        </Box>
    )
}