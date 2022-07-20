import { NavigationContainer } from "@react-navigation/native";
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useState, useEffect } from "react";

import { SingIn } from "../screens/SignIn";
import { AppRoutes } from "./app.routes";
import { Loading } from "../components/Loading";

export function Routes(){
    const [loading, setIsLoading] = useState(true); // Estado para controle de se esta carregando a autenticação
    const [user, setUser] = useState<FirebaseAuthTypes.User>();

    useEffect(()=>{
        const subscriber = auth()
        .onAuthStateChanged(response =>{
            setUser(response);
            setIsLoading(false);
        });
        return subscriber;
    },[]);

    if(loading){
        return <Loading/>
    }

    return(//Verifica se user possui conteudo... Caso sim retorna as rotas.
        <NavigationContainer>
            {user ? <AppRoutes/>:<SingIn/>} 
        </NavigationContainer>
    );
}
