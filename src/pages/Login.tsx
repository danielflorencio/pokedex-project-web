import { Box, Text, Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { useState } from "react";
import { registerLoggedUserState } from "../features/sessionSlice";
import {CgPokemon} from 'react-icons/cg'

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log('handle submit being called.');
        console.log('Data being sent by SignInPage - email: ', email, ' password: ', password);
        (async () => {
          console.log('async function being called.')
          const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'authorization': `${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ 
              email: email,
              password: password
            })
          })
          const data = await response.json() 
          console.log('Data being received by the login api endpoint: ', data)
          if(data.user){
            console.log('if data.user being called.')
            console.log('local email state in SignIn: ', email)
            localStorage.setItem('token', data.user);
            localStorage.setItem('userEmail', email)
            dispatch(registerLoggedUserState(email))
            await navigate('/home') 
          } else{
            alert('Something went wrong. Please try again.')   
          }
      })();
      };

    return(
        <Box bg='#dc0a2d' display={'flex'} justifyContent={'center'} alignItems={'center'} minHeight={'100vh'} padding={3}>
            <Box>
                <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} position={'relative'}>
                    <Box position={'absolute'} bottom={24}>
                        <CgPokemon size={36} color='white'/>
                    </Box>
                </Box>
                <Text color={'#fff'} textAlign={'center'} marginTop={'-20'} marginBottom={'10'} fontWeight={'bold'} fontSize='2xl'>Login Page</Text>
                <Box>
                <form onSubmit={handleSubmit} style={{width: '100%', height: '100%'}}>
                    <Input value={email} type='text' bg={'#fff'} onChange={(e) => {e.preventDefault(); setEmail(e.target.value)}} placeholder='Email' />
                    <Input value={password} type="password" marginY={3} bg={'#fff'} onChange={(e) => {e.preventDefault(); setPassword(e.target.value)}} placeholder='Password' />
                    <Button width={'100%'} type='submit' colorScheme='red'>Sign in.</Button>
                </form>
                </Box>
            </Box>
        </Box>
    )
}