import { useEffect, useState } from 'react'
import './App.css'
import { Box, Flex, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import PokemonList from './components/pokemonList'
import {CgPokemon} from 'react-icons/cg'
import InfoCard from './components/infoCard'
import { Pokemon } from './types/pokemon'

function App() {

  const [searchInputField, setSearchInputField] = useState<string>('')
  const [isSearchByName, setIsSearchByName] = useState<'id' | 'name'>('name')
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [renderedComponent, setRenderedComponent] = useState([<PokemonList pokemonList={pokemons}/>, <InfoCard/>])
  const [renderedComponentId, setRenderedComponentId] = useState(0);


  const handleSearchTypeChange = () => {
    if(isSearchByName === 'name'){
      setIsSearchByName('id')
    } else{
      setIsSearchByName('name')
    }
  }

  useEffect(() => {
    (async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/', {
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
      setPokemons(newPokemonsState)
    })();
  }, [renderedComponent])

  const searchPokemon = async (e: React.FormEvent<HTMLFormElement>) => {   
    e.preventDefault();
    console.log('searchPokemon being called.');
    console.log('searchType: ' , isSearchByName);
      (async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchInputField.toLowerCase()}`, {
          method: 'GET'
        })
        const data = await response.json();
        console.log('RESPONSE RECEIVED ON SEARCH FROM THE API: ', data)
      })();      
  }

  const handleChoosePokemon = async (index: number) => {
    
  }

  const handleReturnToFirstScreen = async () => {

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
          <InputLeftElement pointerEvents='none' cursor={'pointer'}>
            <Search2Icon color='#dc0a2d' cursor={'pointer'}/>
          </InputLeftElement>
          <form onSubmit={(e) => searchPokemon(e)} style={{ width: '100%', height: '100%', position: 'absolute'}}>
          <Input type='text' placeholder={`Search by ${isSearchByName}`} bg='white' borderRadius='22px' size='md' variant='outline' pl={'40px'} value={searchInputField} onChange={(e) => {e.preventDefault(); setSearchInputField(e.target.value)}}/>
          </form>
          </InputGroup>
          <Box onClick={handleSearchTypeChange} 
          cursor={'pointer'} bg='#ffffff' ml={4} borderColor='#e2e8f0' borderWidth='1px' display='flex' borderRadius='22px' alignItems='center' justifyContent='center' paddingX={5}>
            <Text color={'gray.400'} fontSize={22}>#</Text>
          </Box>
          </Flex>
        </Box>
      </Box>
      <Box width='90%' bg='#ffffff' borderRadius={6} borderWidth={'1px'} borderColor={'#dc0a2d'} minHeight='300px' dropShadow='2xl' padding={4}>
        {/* <PokemonList pokemonList={pokemons}/> */}
        {renderedComponent[renderedComponentId]}
      </Box>
      </Box>
      {/* <InfoCard/> */}
    </Box>  
  )
}

export default App