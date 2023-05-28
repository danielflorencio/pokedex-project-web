import { Box, Text } from "@chakra-ui/react";
import { Pokemon } from "../types/pokemon";

type PreviewCardProps = {
    pokemon: Pokemon, 
    handlePokemonChoice?: (pokemonId: number) => void,
    id: number
}

export default function PreviewCard({pokemon, handlePokemonChoice, id}: PreviewCardProps){
    return(
        <Box position='relative' id="pokemon-preview" onClick={() => {if(handlePokemonChoice) handlePokemonChoice(id)}} borderRadius='8px' boxShadow='md' bg='white' height='150px' width='150px' display='flex' flexDirection='column' justifyContent='space-between' cursor={'pointer'}>
            <Box textAlign='right' color={'gray.600'} id="pokemon-id" pr={2} pt={2}>
                #{pokemon.id && String(pokemon.id).padStart(3, '0')}
            </Box>
            <Box position='absolute' top={'16%'} left={'20%'}>
                <img id="pokemon-img" src={`${pokemon.pokemonImgUrl}`}></img>
            </Box>

            <Box textAlign='center' height='40%' borderRadius='8px' bg='gray.200' display={'flex'} alignItems={'center'} justifyContent='center'>
                <Text id="pokemon-name" position={'absolute'} bottom={'6px'}>{pokemon.name}</Text>
            </Box>
        </Box>
    )
}