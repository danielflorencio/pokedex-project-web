import { useEffect, useState } from "react";
import { Pokemon } from "../types/pokemon";
import PreviewCard from "./previewCard";
import { Box } from "@chakra-ui/react";

type PokemonListProps = {
    pokemonToSearch: string, 
    setPokemonList: React.Dispatch<React.SetStateAction<Pokemon[]>>,
    pokemonList: Pokemon[],
    handlePokemonChoice?: (pokemonId: string) => void
}

export default function PokemonList({pokemonToSearch, setPokemonList, pokemonList, handlePokemonChoice}: PokemonListProps){

    // const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    console.log('Data received as pokemonList in the <PokemonList/> component: ', pokemonList)

    useEffect(() => {
        if(pokemonList.length === 0){
            (async () => {
                let searchParameters: string = ''
                if(pokemonToSearch !== 'default'){
                  searchParameters = pokemonToSearch
                }
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`, {
                  method: 'GET'
                })
                const data = await response.json();
                console.log('DATA RECEIVED ON COMPONENT MOUNT: ', data);
          
                const newPokemonsState: Pokemon[] = await Promise.all(data.results.map(async (pokemon, index) => {
                  const pokemonResponse = await fetch(pokemon.url);
                  const pokemonData = await pokemonResponse.json();
            
                  return {
                    name: pokemon.name,
                    id: pokemonData.id.toString(),
                    pokemonImgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id.toString()}.png`
                  };
                }));
          
                console.log('newPokemonState: ', newPokemonsState);
                setPokemonList([...newPokemonsState])
              })();
        }
      }, [])

    return(
        <Box display='flex' gap={6} flexWrap='wrap' justifyContent={'space-around'}>
            {pokemonList && pokemonList.map((pokemon, index) => 
                <PreviewCard key={index} pokemon={pokemon} handlePokemonChoice={handlePokemonChoice} id={pokemon.id}/>
            )}
        </Box>
    )
}