import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import InformacionScreen from './components/InformacionScreen';
import CatalogoScreen from './components/CatalogoScreen';
import ProbadorVirtualScreen from './components/ProbadorVirtualScreen';
import DetalleProductoScreen from './components/DetalleProductoScreen'; // Importa DetalleProductoScreen

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
          name="Informacion"
          component={InformacionScreen}
          options={{ title: 'Información' }}
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
        <Stack.Screen
          name="DetalleProducto"
          component={DetalleProductoScreen}
          options={{ title: 'Detalle del Producto' }} // Opcional: Cambia el título según lo necesites
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
