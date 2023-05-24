import { Box, Divider, Text } from "@chakra-ui/react";
import { MyPokemon } from "../data/pokemons";
import {TbWeight} from 'react-icons/tb'
import {TfiRuler} from 'react-icons/tfi'

export default function Characteristics(){
    return(
        <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} flexWrap={'wrap'}>
            <Text textAlign='center' fontWeight={'bold'} mb={6}>About</Text>
            <Box>
                {/* Here will go the pokemon's types and image as an absolute positioned element. */}
            </Box>
            <Box display={'flex'} gap={5}>
                
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-around'} gap={2}>
                    <Box display={'flex'} alignItems={'center'}>
                        <TbWeight size={18}/>
                        <Text>{MyPokemon.weight}</Text>
                    </Box>
                    <Text fontSize={'0.6rem'} color={'gray.500'}>weight</Text>
                </Box>
                
                <Divider orientation="vertical" height={'100%'}/>
                
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-around'} gap={2}>
                    <Box display={'flex'} alignItems={'center'}>
                        <TfiRuler size={18}/>            
                        <Text>{MyPokemon.height}</Text>
                    </Box>
                    <Text fontSize={'0.6rem'} color={'gray.500'}>Height</Text>
                </Box>
                
                <Divider orientation="vertical" height={'100%'}/>
                
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-around'} >
                    {MyPokemon.moves.map(move => (<Text fontSize={'0.8rem'} fontWeight={'550'}>{move}</Text>))}
                    <Text fontSize={'0.6rem'} color={'gray.500'}>Moves</Text>
                </Box>
            </Box>
        </Box>
    )
}