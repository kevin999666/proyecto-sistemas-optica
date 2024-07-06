import React from 'react';
import { View, Image, Button, StyleSheet, FlatList } from 'react-native';

const data = [
  { key: '1', title: 'Ingresar', image: require('../assets/fotos/Logo.jpg') },
  // Puedes agregar más elementos aquí si necesitas mostrar más opciones
];

const LoginScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Image
        source={item.image}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <Button
          title={item.title}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: 270,
    height: 150,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
  },
});

export default LoginScreen;
