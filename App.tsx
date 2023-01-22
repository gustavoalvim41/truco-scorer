import { useFonts } from 'expo-font';
import Routes from './src/routes';

const App = () => {

  const [fontsLoaded] = useFonts({
    'Montserrat-Black': require('./src/assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-ExtraBold': require('./src/assets/fonts/Montserrat-ExtraBold.ttf'),
    'Montserrat-Bold': require('./src/assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('./src/assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./src/assets/fonts/Montserrat-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Routes />
  )
}

export default App;