import { useState } from 'react';
import { VStack, Heading, Icon, useTheme } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';
import auth from '@react-native-firebase/auth';


import Logo from '../assets/logo_primary.svg';

import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Alert } from 'react-native';

export function SingIn() {
    // É um array de duas posições onde, a primeira é o estado e a segunda é a função que atualiza o estado.
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { colors } = useTheme();

    function handleSignIn(){
        if(!email || !password){
            return Alert.alert('Entrar', 'Informe email e senha!');
        }
        setIsLoading(true);
        auth()
        .signInWithEmailAndPassword(email,password)
        .catch((error)=>{
            console.log(error.code)
            setIsLoading(false);
            
            if(error.code === 'auth/user-not-found'){
                return Alert.alert('Entrar','Usuário não cadastrado');
            }
            if(error.code === 'auth/invalid-email'){
                return Alert.alert('Entrar','Email inválido');
            }
            if(error.code === 'auth/wrong-password'){
                return Alert.alert('Entrar','Email inválido');
            }
            return Alert.alert('Entrar','Não foi possível acessar!')
        });
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
            isLoading={isLoading}
            />
            
        </VStack>
    );
}