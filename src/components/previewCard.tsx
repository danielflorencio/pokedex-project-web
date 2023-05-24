import { Box, Text } from "@chakra-ui/react";
import { Pokemon } from "../types/pokemon";

export default function PreviewCard({pokemon}: {pokemon: Pokemon}){
    return(
        <Box position='relative' borderRadius='8px' boxShadow='md' bg='white' height='150px' width='150px' display='flex' flexDirection='column' justifyContent='space-between' cursor={'pointer'}>
            <Box textAlign='right' color={'gray.600'} pr={2} pt={2}>
                #{pokemon.id}
            </Box>
            <Box position='absolute' top={'16%'} left={'20%'}>
                <img src={`${pokemon.pokemonImgUrl}`}></img>
            </Box>

            <Box textAlign='center' height='40%' borderRadius='8px' bg='gray.200' display={'flex'} alignItems={'center'} justifyContent='center'>
                <Text position={'absolute'} bottom={'6px'}>{pokemon.name}</Text>
            </Box>

        </Box>
    )
}