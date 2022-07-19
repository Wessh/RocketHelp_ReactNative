//Tipagem para rotas
export declare global{ //Declaração global
    namespace ReactNavigation{ // Sobrescreve o namespace ReactNavigation
        interface RootParamList{
            home: undefined,
            new: undefined,
            details: {orderId: string},
        }
    }
}