import { useFonts, NunitoSans_400Regular,NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/theme';

import { StatusBar } from 'expo-status-bar';

import { Home } from './src/screens/Home';
import { Text } from 'react-native';
import { Statistic } from './src/screens/Statistc';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular,NunitoSans_700Bold})
  return (
    <ThemeProvider theme={theme}>
       { fontsLoaded ? <Routes/> : <Text> Faio </Text>}
       
    </ThemeProvider>
  );
}

