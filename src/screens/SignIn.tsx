import { useState } from 'react';
import { VStack, Heading, Icon, useTheme } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';


import Logo from '../assets/logo_primary.svg';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function SingIn() {
    // É um array de duas posições onde, a primeira é o estado e a segunda é a função que atualiza o estado.
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');

    const { colors } = useTheme();

    function handleSignIn(){
        console.log(email,password);
    }

    return (
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
            <Logo/>

            <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
                Acesse sua conta
            </Heading>
            <Input 
                onChangeText={setEmail}
                placeholder='E-mail'
                mb={4}
                InputLeftElement={
                    <Icon as={
                        <Envelope color={
                            colors.gray[300]
                        }/>
                    } ml={4}
                    />
                }
            />
            <Input placeholder='Senha'
            mb={8}
            InputLeftElement={
                <Icon as={
                    <Key color={
                        colors.gray[300]
                    }/>
                } ml={4}
                />}
                secureTextEntry
                onChangeText={setPassword}
            />
            <Button
            w='full'
            title='Entrar'
            onPress={handleSignIn}
            />
            
        </VStack>
    );
}