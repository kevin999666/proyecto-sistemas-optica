import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DetalleProductoScreen = ({ route }) => {
  const { producto } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: producto.imagen }}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>{producto.nombre}</Text>
      <Text style={styles.text}>Código: {producto.id}</Text>
      <Text style={styles.text}>Precio: {producto.precio}</Text>
      <Text style={styles.text}>Stock disponible: 1</Text>
      <Text style={styles.sectionTitle}>Características del producto</Text>
      <Text style={styles.text}>Forma: Phantos</Text>
      <Text style={styles.text}>Varilla: 140</Text>
      <Text style={styles.text}>Género: {producto.genero}</Text>
      <Text style={styles.text}>Puente: 19</Text>
      <Text style={styles.text}>Color montura: {producto.color}</Text>
      <Text style={styles.text}>Calibre: 50</Text>
      <Text style={styles.text}>Color de luna: Sin color</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default DetalleProductoScreen;
