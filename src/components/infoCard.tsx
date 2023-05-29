import { Box, Text } from "@chakra-ui/react";
import {ArrowBackIcon} from '@chakra-ui/icons'
import Stats from "./Stats";
import {CgPokemon} from 'react-icons/cg'
import Characteristics from "./Characteristics";
import { useEffect, useState } from "react";
import { Pokemon } from "../types/pokemon";

type InfoCardProps = {
    pokemonId: number, 
    handleReturnToInitialScreen: () => void,
    handlePokemonChoice: (pokemonId: number) => void
}

export default function InfoCard({pokemonId, handleReturnToInitialScreen, handlePokemonChoice}: InfoCardProps){

    const [myPokemon, setMyPokemon] = useState<Pokemon>();
 
    useEffect(() => {
        (async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`, {method: 'GET'})
            const data = await response.json();

            const colorResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`, {method: 'GET'})
            const colorData = await colorResponse.json();

            const descriptionResponse = await fetch(`https://pokeapi.co/api/v2/characteristic/${pokemonId}/`, {method: 'GET'})
            const descriptionData = await descriptionResponse.json();

            // The code below looks through all the descriptions from the API, and then return only the one that's in english.
            const newDescriptionData = descriptionData.descriptions.find((description: any) => description.language.name === 'en');

            console.log('Pokemon being received on InfoCard data fetching: ', data)
            console.log('pokemon.type: ', data.types)
            console.log('data.types[0].name', data.types[0].type.name)

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
                colorTheme: colorData.color.name,
                description: newDescriptionData.description
            })
        })();
    }, [pokemonId])

    return(
        <Box id="infocard" height={580} position={'relative'} width={380} bg={`${myPokemon?.colorTheme === null || undefined ? ('#38a169') : (myPokemon?.colorTheme)}`} padding={2} borderRadius={'8px'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} margin={'auto'}>
            <CgPokemon size={160} style={{position: 'absolute', color: 'white', right: '30px', opacity: 0.3}}/>
            <Box display={'flex'} justifyContent={'space-between'} paddingTop={2} pr={2} >
                <Box display={'flex'} gap={3}>
                    <ArrowBackIcon width={'32px'} height={'32px'} cursor={'pointer'} color={'#ffffff'} onClick={handleReturnToInitialScreen}/>

                    {/* 
                    The code in the element below is responsible for showing the pokemon's name correctly.
                    It verifies if the pokemon's name exists, and if the name exists, it returns two strings.
                    The first string is only the first letter of the name, but in upper case.
                    The second string composes the rest of the pokemon's name, starting from index one till the pokemon's string's length.
                    */}

                    <Text fontWeight={'bold'} color={'#ffffff'} fontSize={'1.3rem'}>{myPokemon?.name && myPokemon.name[0].toUpperCase() + myPokemon.name.slice(1, myPokemon.name.length)}</Text>
                </Box>
                <Text id="infocard-pokemon-id" fontWeight={'bold'} color={'#ffffff'}>#{myPokemon && String(myPokemon.id).padStart(3, '0')}</Text>
            </Box>

            <Box bg={'white'} minHeight={'70%'} borderRadius={'8px'} width='100%' display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Characteristics weight={myPokemon?.weight} height={myPokemon?.height} pokemonId={myPokemon?.id} moves={myPokemon?.moves} handlePokemonChoice={handlePokemonChoice}/>
                <Box my={6}>
                    <Text>{myPokemon?.description}.</Text>
                </Box>
                <Stats hp={myPokemon?.hp} att={myPokemon?.att} def={myPokemon?.def} spd={myPokemon?.spd} satk={myPokemon?.satk} sdef={myPokemon?.sdef} />
            </Box>
        </Box>
    )
}