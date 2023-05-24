import { Box, Text } from "@chakra-ui/react";
import { MyPokemon } from "../data/pokemons";
import {ChevronLeftIcon} from '@chakra-ui/icons'
import Stats from "./Stats";
import Characteristics from "./Characteristics";
export default function infoCard(){

    return(
        <Box height={580} width={380} bg={`${MyPokemon.colorTheme}`} padding={2} borderRadius={'8px'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
            <Box display={'flex'} justifyContent={'space-between'} paddingTop={2} pr={2} >
                <Box display={'flex'} gap={3}>
                <ChevronLeftIcon width={'32px'} height={'32px'}/>
                <Text>{MyPokemon.name}</Text>
                </Box>
                <Text>{MyPokemon.id}</Text>
            </Box>

            <Box></Box>
            
            <Box bg={'white'} minHeight={'70%'} borderRadius={'8px'} width='100%' display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Characteristics/>
                <Box my={6}>
                    <Text>Description</Text>
                </Box>
                <Stats/>
            </Box>
        </Box>
    )
}