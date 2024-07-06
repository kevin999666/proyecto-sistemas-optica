import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const DetalleProductoScreen = ({ route }) => {
  const { producto } = route.params;

  // Array de características del producto
  const caracteristicas = [
    { id: '1', titulo: 'Forma', descripcion: 'Phantos' },
    { id: '2', titulo: 'Varilla', descripcion: '140' },
    { id: '3', titulo: 'Género', descripcion: producto.genero },
    { id: '4', titulo: 'Puente', descripcion: '19' },
    { id: '5', titulo: 'Color montura', descripcion: producto.color },
    { id: '6', titulo: 'Calibre', descripcion: '50' },
    { id: '7', titulo: 'Color de luna', descripcion: 'Sin color' },
  ];

  const renderCaracteristica = ({ item }) => (
    <View style={styles.caracteristicaItem}>
      <Text style={styles.caracteristicaTitulo}>{item.titulo}</Text>
      <Text style={styles.caracteristicaDescripcion}>{item.descripcion}</Text>
    </View>
  );

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
      <FlatList
        data={caracteristicas}
        renderItem={renderCaracteristica}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
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
  caracteristicaItem: {
    marginBottom: 12,
  },
  caracteristicaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  caracteristicaDescripcion: {
    fontSize: 16,
  },
});

export default DetalleProductoScreen;
