import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import DescripcionScreen from './components/DescripcionScreen';
import CatalogoScreen from './components/CatalogoScreen';
import ProbadorVirtualScreen from './components/ProbadorVirtualScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Descripcion"
          component={DescripcionScreen}
          options={{ title: 'Descripción' }}
        />
        <Stack.Screen
          name="Catalogo"
          component={CatalogoScreen}
          options={{ title: 'Catálogo' }}
        />
        <Stack.Screen
          name="ProbadorVirtual"
          component={ProbadorVirtualScreen}
          options={{ title: 'Probador Virtual' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
