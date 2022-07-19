import { NativeBaseProvider, StatusBar } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';


import { THEME } from './styles/theme'; // importa o tema que eu modifiquei
//Realizando tipo um copywith no tema padrão usado pelo native base.
export default function App() {
  const [fontsloaded] = useFonts({Roboto_400Regular, Roboto_700Bold});
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
      />
      { fontsloaded ? <Routes /> : <Loading/> }
    </NativeBaseProvider>
    
  );
}
