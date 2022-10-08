import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inico from './src/screens/Home';
import Busqueda from './src/screens/Search';
import Reproductor from './src/screens/VideoPlayer';
import Explorar from './src/screens/Explore';
import { MaterialIcons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './src/redux/slices/reducer';


const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Store = createStore(reducer);

const RootHome = () => {
  return (
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName;

        if (route.name === 'home') {
          iconName = 'home';
        } else if (route.name === 'explore') {
          iconName = 'explore';
        }

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={32} color={color} />;
      },
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tabs.Screen name='home' component={Inico} options={{headerShown: false}}/>
      <Tabs.Screen name='explore' component={Explorar} options={{headerShown: false}}/>
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={Store}>
    <TailwindProvider>
      <SafeAreaView className='flex-1'>
      <StatusBar style='auto'/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='rootHome' component={RootHome} options={{headerShown: false}}/>
        <Stack.Screen name='search' component={Busqueda} options={{headerShown: false}}/>
        <Stack.Screen name='videoPlayer' component={Reproductor}/>

      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
    </TailwindProvider>
    </Provider>
  );
}

