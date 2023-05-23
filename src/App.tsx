import { useState } from 'react'
import './App.css'
import { Box, Flex, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import PokemonList from './components/pokemonList'
import {CgPokemon} from 'react-icons/cg'

function App() {

  const [searchInputField, setSearchInputField] = useState<string>('')
  const [isSearchByName, setIsSearchByName] = useState<'id' | 'name'>('name')

  const handleSearchTypeChange = () => {
    if(isSearchByName === 'name'){
      setIsSearchByName('id')
    } else{
      setIsSearchByName('name')
    }
  }

  return (
    <Box bg='#dc0a2d' minHeight='100vh' width='100vw' pt={6} display='flex' justifyContent='center' flexWrap='wrap'>
      <Box width='100%' height='100%' display='flex' flexWrap='wrap' justifyContent={'center'}>
      <Box width={{base: '85%', md: '80%'}} mb='16px'> 
        <Box>
          <Box display={'flex'}>
            <CgPokemon size={36} color='white'/>
            <Text color={'white'} fontSize={22} ml={22} fontWeight={'bold'}>Pokédex</Text>
          </Box>
          <Flex mt={2}>
          <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <Search2Icon color='#dc0a2d' />
          </InputLeftElement>
          <Input placeholder={`Search by ${isSearchByName}`} bg='white' borderRadius='22px' size='md' variant='outline' value={searchInputField} onChange={(e) => {e.preventDefault(); setSearchInputField(e.target.value)}}/>
          </InputGroup>
          <Box bg='#ffffff' ml={4} borderColor='#e2e8f0' borderWidth='1px' display='flex' borderRadius='22px' alignItems='center' justifyContent='center' paddingX={5}>
            <Text color={'gray.400'} fontSize={22}>#</Text>
          </Box>
          </Flex>
        </Box>
      </Box>

      <Box width='90%' bg='#ffffff' borderRadius={6} borderWidth={'1px'} borderColor={'#dc0a2d'} minHeight='300px' dropShadow='2xl' padding={4}>
        <PokemonList/>
      </Box>
      </Box>


    </Box>  
  )
}

export default App