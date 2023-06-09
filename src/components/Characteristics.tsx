import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Divider, Text } from "@chakra-ui/react";
import {TbWeight} from 'react-icons/tb'
import {TfiRuler} from 'react-icons/tfi'

type PokemonCharacteristicsProps = {
    weight?: number,
    height?: number, 
    moves?: string[],
    pokemonId?: number,
    handlePokemonChoice: (pokemonId: number) => void
}

export default function Characteristics({weight, height, moves, pokemonId, handlePokemonChoice}: PokemonCharacteristicsProps){
    return(
        <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} flexWrap={'wrap'}>
            
            <Box display={'flex'} justifyContent={'center'} position={'relative'}>
                <Text fontWeight={'bold'} mb={6}>About</Text>
                <Box position={'absolute'} bottom={'40px'}>
                    {pokemonId && <img width={100} height={100} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId.toString()}.png`}></img>}
                </Box>
                <Box position={'absolute'} bottom={'80px'} display={'flex'} justifyContent={'space-between'} width={'100%'}>
                    {pokemonId && pokemonId > 1 ? (<ChevronLeftIcon id="left-arrow" width={'30px'} height={'30px'} cursor={'pointer'} color={'#ffffff'} onClick={() => handlePokemonChoice(Number(pokemonId) - 1)}/>) : (<Text></Text>)}
                    {pokemonId && <ChevronRightIcon id="right-arrow" width={'30px'} height={'30px'} cursor={'pointer'} color={'#ffffff'} onClick={() => handlePokemonChoice(Number(pokemonId) + 1)}/>}
                </Box>
            </Box>

            <Box display={'flex'} gap={5}>
                
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-around'} gap={2}>
                    <Box display={'flex'} alignItems={'center'}>
                        <TbWeight size={18}/>
                        <Text>{weight ? (weight) : <></>}</Text>
                    </Box>
                    <Text fontSize={'0.6rem'} color={'gray.500'}>weight</Text>
                </Box>
                
                <Divider orientation="vertical" height={'100%'}/>
                
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-around'} gap={2}>
                    <Box display={'flex'} alignItems={'center'}>
                        <TfiRuler size={18}/>            
                        <Text>{height ? (height) : <></>}</Text>
                    </Box>
                    <Text fontSize={'0.6rem'} color={'gray.500'}>Height</Text>
                </Box>
                
                <Divider orientation="vertical" height={'100%'}/>
                
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-around'} >
                    {moves && moves.map(move => (<Text fontSize={'0.8rem'} fontWeight={'550'}>{move}</Text>))}
                    <Text fontSize={'0.6rem'} color={'gray.500'}>Moves</Text>
                </Box>
            </Box>
        </Box>
    )
}