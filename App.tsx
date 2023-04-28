import { useFonts, NunitoSans_400Regular,NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/theme';

import { StatusBar } from 'expo-status-bar';

import { Home } from './src/screens/Home';
import { Text } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular,NunitoSans_700Bold})
  return (
    <ThemeProvider theme={theme}>
       { fontsLoaded ? <Home/> : <Text> Faio </Text>}
    </ThemeProvider>
  );
}

