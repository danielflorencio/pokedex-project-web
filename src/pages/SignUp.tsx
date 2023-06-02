import { Box, Text, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { UserData } from "../types/user";
import {CgPokemon} from 'react-icons/cg'

export default function SignUp(){

    const [userData, setUserData] = useState<UserData>({firstName: '', lastName: '', email: '', password: ''})
  
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      console.log({
        email: formData.get('email'),
        password: formData.get('password'),
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName')
      });
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          password: userData.password
        })
      })
      const data = await response.json()
      console.log('response: ', response)
      if(response.ok){
        window.location.href = '/login'
      }else{
        alert('There was an error while trying to register the user.')
      }
      console.log('data: ', data)
    };
    
    return(
        <Box bg='#dc0a2d' display={'flex'} justifyContent={'center'} alignItems={'center'} minHeight={'100vh'} padding={3}>
            <Box>
                <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} position={'relative'}>
                    <Box position={'absolute'} bottom={24}>
                        <CgPokemon size={36} color='white'/>
                    </Box>
                </Box>
                <Text color={'#fff'} textAlign={'center'} marginTop={'-20'} marginBottom={'10'} fontWeight={'bold'} fontSize='2xl'>Sign Up page</Text>
                <form onSubmit={handleSubmit} style={{width: '100%', height: '100%'}}>
                <Box display={'flex'} marginBottom={3} gap={2}>
                    <Input type="text" bg={'#fff'} placeholder="First name" value={userData.firstName} onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}/>
                    <Input type="text" bg={'#fff'} placeholder="Last Name" value={userData.lastName} onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}/>
                </Box>
                <Input type="text" bg={'#fff'} marginBottom={3} placeholder="Email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })}/>
                <Input type="password" bg={'#fff'} marginBottom={3} placeholder="Password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })}/>
                <Button type="submit" width={'100%'} colorScheme="red" fontWeight={'bold'}>Submit</Button>
                </form>
            </Box>
        </Box>
    )
}