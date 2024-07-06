import React from 'react';
import { View, Text, Image, StyleSheet, Button, FlatList } from 'react-native';

const CatalogoScreen = ({ navigation }) => {
  // Ejemplo de productos
  const productos = [
    { id: 'AN7233', nombre: 'AN7233 Saisei Negro Hombre', precio: 'S/ 152.50', genero: 'Hombre', color: 'Negro', imagen: 'https://gmo.com.pe/media/catalog/product/cache/33b9d864c7a8ca43504665713fe676d6/0/a/0an7233__2805_000a_1fkqvvfut6lbrqb5.jpg' },
    { id: '0AN6128', nombre: 'AN6128 Sling Azul Hombre', precio: 'S/ 220.00', genero: 'Hombre', color: 'Azul', imagen: 'https://gmo.com.pe/media/catalog/product/cache/33b9d864c7a8ca43504665713fe676d6/0/a/0an6128__741_000a_jnrsqqnxh0lumfcq.jpg' },
    { id: 'P93153B', nombre: 'P93153B Negro Mujer', precio: 'S/ 112.50', genero: 'Mujer', color: 'Negro', imagen: 'https://gmo.com.pe/media/catalog/product/cache/33b9d864c7a8ca43504665713fe676d6/0/p/0p93153b__g545_000a_kyqdthg5ufiodp6g.jpg' }
  ];

  const navigateToDetalleProducto = (producto) => {
    navigation.navigate('DetalleProducto', { producto });
  };

  const renderProducto = ({ item }) => (
    <View style={styles.productoContainer}>
      <Image source={{ uri: item.imagen }} style={styles.image} />
      <Text style={styles.title}>{item.nombre}</Text>
      <Text style={styles.text}>Precio: {item.precio}</Text>
      <Button title="Ver Detalle" onPress={() => navigateToDetalleProducto(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={productos}
        renderItem={renderProducto}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ alignItems: 'center' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  productoContainer: {
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
  },
  image: {
    width: 150,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default CatalogoScreen;
