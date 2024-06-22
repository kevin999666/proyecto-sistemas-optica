import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { producto } = route.params;

  return (
    <View style={styles.container}>
      <Image source={producto.imagen} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{producto.nombre}</Text>
        <Text style={styles.productDetail}>Precio: {producto.precio}</Text>
        <Text style={styles.productDetail}>Género: {producto.genero}</Text>
        <Text style={styles.productDetail}>Color: {producto.color}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  productImage: {
    width: 300,
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  productInfo: {
    alignItems: 'center',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  productDetail: {
    fontSize: 18,
    color: '#555',
    marginBottom: 4,
  },
});

export default ProductDetailScreen;
