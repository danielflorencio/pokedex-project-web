import { Pokemon } from "../types/pokemon";
import PreviewCard from "./previewCard";
import { Box } from "@chakra-ui/react";
export default function PokemonList({pokemonList}: {pokemonList: Pokemon[]}){

    return(
        <Box display='flex' gap={6} flexWrap='wrap' justifyContent={'space-around'}>
            {pokemonList && pokemonList.map((pokemon, index) => 
                <PreviewCard key={index} pokemon={pokemon}/>
            )}
        </Box>
    )
}