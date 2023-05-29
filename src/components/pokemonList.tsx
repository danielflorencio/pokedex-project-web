import { useEffect} from "react";
import { Pokemon } from "../types/pokemon";
import PreviewCard from "./previewCard";
import { Box } from "@chakra-ui/react";

type PokemonListProps = {
    setPokemonList: React.Dispatch<React.SetStateAction<Pokemon[]>>,
    pokemonList: Pokemon[],
    handlePokemonChoice?: (pokemonId: number) => void
}

export default function PokemonList({setPokemonList, pokemonList, handlePokemonChoice}: PokemonListProps){

  // The following useEffect detects if there are no Pokemons loaded into the pokemonList state.
  // If there are no pokemons loaded into the list, it will make a fetch request to the API to retrieve some pokemon's data.

  useEffect(() => {
      if(pokemonList.length === 0){
          (async () => {

              const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`, {method: 'GET'})
              const data = await response.json();
        
              const newPokemonsState: Pokemon[] = await Promise.all(data.results.map(async (pokemon: any) => {
                const pokemonResponse = await fetch(pokemon.url);
                const pokemonData = await pokemonResponse.json();
          
                return {
                  name: pokemon.name,
                  id: pokemonData.id.toString(),
                  pokemonImgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id.toString()}.png`
                };
              }));
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