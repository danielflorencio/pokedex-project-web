import { Box, Text } from "@chakra-ui/react";
import { MyPokemon } from "../data/pokemons";
import {ChevronLeftIcon} from '@chakra-ui/icons'
import Stats from "./Stats";
import Characteristics from "./Characteristics";
import { useEffect, useState } from "react";
import { Pokemon } from "../types/pokemon";

type InfoCardProps = {
    pokemonId: string, 
    handleReturnToInitialScreen: () => void
}

export default function InfoCard({pokemonId, handleReturnToInitialScreen}: InfoCardProps){

    const [myPokemon, setMyPokemon] = useState<Pokemon>();
 
    useEffect(() => {
        (async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId.toLowerCase()}`, {
                method: 'GET'
            })
            const data = await response.json();

            const colorResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-color/${pokemonId.toLowerCase()}/`, {
                method: 'GET'
            })
            const colorData = await colorResponse.json();

            console.log('Pokemon being received on InfoCard data fetching: ', data)
            setMyPokemon({
                name: data.name, 
                id: pokemonId, 
                height: data.height.toString(), 
                weight: data.weight.toString(),
                hp: data.stats[0].base_stat,
                att: data.stats[1].base_stat,
                def: data.stats[2].base_stat,
                satk: data.stats[3].base_stat,
                sdef: data.stats[4].base_stat,
                spd: data.stats[5].base_stat,
                moves: [data.moves[0].move.name, data.moves[1].move.name],
                colorTheme: colorData.name
            })
        })();
    }, [])

    return(
        <Box height={580} width={380} bg={`${myPokemon !== null || undefined ? (myPokemon?.colorTheme) : ('green')}`} padding={2} borderRadius={'8px'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} margin={'auto'}>
            <Box display={'flex'} justifyContent={'space-between'} paddingTop={2} pr={2} >
                <Box display={'flex'} gap={3}>
                <ChevronLeftIcon width={'32px'} height={'32px'} cursor={'pointer'} onClick={handleReturnToInitialScreen}/>
                <Text fontWeight={'bold'}>{myPokemon?.name}</Text>
                </Box>
                <Text fontWeight={'bold'}>#{myPokemon?.id}</Text>
            </Box>
            
            <Box bg={'white'} minHeight={'70%'} borderRadius={'8px'} width='100%' display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Characteristics weight={myPokemon?.weight} height={myPokemon?.height} pokemonId={myPokemon?.id} moves={myPokemon?.moves}/>
                <Box my={6}>
                    <Text>Description</Text>
                </Box>
                <Stats hp={myPokemon?.hp} att={myPokemon?.att} def={myPokemon?.def} spd={myPokemon?.spd} satk={myPokemon?.satk} sdef={myPokemon?.sdef} />
            </Box>
        </Box>
    )
}