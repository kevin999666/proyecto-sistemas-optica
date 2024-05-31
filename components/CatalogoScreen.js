import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CatalogoScreen = () => {
  const productos = [
    {
      id: 1,
      nombre: 'ARNETTE',
      precio: 'S/ 152.50',
      genero: 'Hombre',
      color: 'Negro',
      imagen: require('../assets/fotos/AN7233 Saisei Negro Hombre.jpg'), // Asegúrate de tener la imagen en la carpeta `assets`
    },
    {
      id: 2,
      nombre: 'GMO Azul',
      precio: 'S/ 99.50',
      genero: 'Hombre',
      color: 'Azul',
      imagen: require('../assets/fotos/GN1001 Azul Hombre.jpg'), // Asegúrate de tener la imagen en la carpeta `assets`
    },
    {
      id: 3,
      nombre: 'GMO Negro',
      precio: 'S/ 199.00',
      genero: 'Mujer',
      color: 'Negro',
      imagen: require('../assets/fotos/GN1002 Negro Mujer.jpg'), // Asegúrate de tener la imagen en la carpeta `assets`
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo</Text>
      {productos.map((producto) => (
        <View key={producto.id} style={styles.productContainer}>
          <Image source={producto.imagen} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text style={styles.productName}>{producto.nombre}</Text>
            <Text style={styles.productDetail}>Precio: {producto.precio}</Text>
            <Text style={styles.productDetail}>Género: {producto.genero}</Text>
            <Text style={styles.productDetail}>Color: {producto.color}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  productImage: {
    width: 150,
    height: 100,
    marginRight: 16,
  },
  productInfo: {
    justifyContent: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productDetail: {
    fontSize: 14,
    color: '#555',
  },
});

export default CatalogoScreen;
