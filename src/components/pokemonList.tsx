import { useState } from "react";
import { Pokemon } from "../types/pokemon";
import PreviewCard from "./previewCard";
import { MyPokemon } from "../data/pokemons";
import { Box } from "@chakra-ui/react";
export default function PokemonList(){

    const [pokemonList, setPokemonList] = useState<Pokemon[]>([MyPokemon, MyPokemon, MyPokemon]);

    return(
        <Box display='flex' gap={6} flexWrap='wrap'>
            {pokemonList && pokemonList.map((pokemon, index) => 
                <PreviewCard key={index} pokemon={pokemon}/>
            )}
        </Box>
    )
}