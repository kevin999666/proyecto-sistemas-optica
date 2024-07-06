import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Camera } from 'expo-camera';

const ProbadorVirtualScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [selectedProductImage, setSelectedProductImage] = useState(null);
  const [productImageStyles, setProductImageStyles] = useState({
    width: 300, // Ajusta el tamaño inicial del producto
    height: 'auto',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    position: 'absolute',
    pointerEvents: 'auto'
  });

  // Ejemplo de datos de productos
  const data = [
    {
      id: '1',
      imageUrl: 'https://gmo.com.pe/media/catalog/product/cache/7be52fbb0c5601f0a4a4aefcc808876c/0/a/0an4308__27632v_000a_bmqfki5bfppjnjhn.jpg',
      name: 'Lentes',
      description: 'Precio: S/100 - Marca: Ray Ban - Código: 123',
      otherInfo: 'Color: negro Material: metal',
    },
    // Agregar más productos según sea necesario
  ];

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      setPhoto(photo.uri);
    }
  };

  const retakePicture = () => {
    setPhoto(null);
    setSelectedProductImage(null);
    resetProductImageStyles();
  };

  const handleProductSelect = (productImageUrl) => {
    setSelectedProductImage(productImageUrl);
    setProductImageStyles({ ...productImageStyles, pointerEvents: 'auto' });
  };

  const resetProductImageStyles = () => {
    setProductImageStyles({
      width: 150,
      height: 'auto',
      top: '50%',
      left: '50%',
      transform: [{ translateX: -50 }, { translateY: -50 }],
      position: 'absolute',
      pointerEvents: 'auto'
    });
  };

  const handleMouseMove = (event) => {
    if (!selectedProductImage || !photo) return;

    const { nativeEvent } = event;
    const container = event.currentTarget;
    const target = event.target;

    let offsetX = nativeEvent.pageX - target.offsetWidth / 2;
    let offsetY = nativeEvent.pageY - target.offsetHeight / 2;

    if (offsetX < 0) offsetX = 0;
    if (offsetY < 0) offsetY = 0;
    if (offsetX + target.offsetWidth > container.offsetWidth) offsetX = container.offsetWidth - target.offsetWidth;
    if (offsetY + target.offsetHeight > container.offsetHeight) offsetY = container.offsetHeight - target.offsetHeight;

    setProductImageStyles({
      ...productImageStyles,
      left: offsetX,
      top: offsetY
    });
  };

  const handleScaleImage = (factor) => {
    if (!selectedProductImage || !productImageStyles.width) return;

    let newWidth = productImageStyles.width * factor;
    let newHeight = productImageStyles.height * factor;

    setProductImageStyles({
      ...productImageStyles,
      width: newWidth,
      height: newHeight
    });
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Probador Virtual</Text>
      {!photo ? (
        <View style={styles.cameraContainer}>
          <Camera
            style={styles.camera}
            type={Camera.Constants.Type.front}
            ref={(ref) => setCameraRef(ref)}
          />
          <Button title="Tomar Foto" onPress={takePicture} />
        </View>
      ) : (
        <View style={styles.photoContainer}>
          <Text style={styles.photoTitle}>Foto Capturada:</Text>
          <Image source={{ uri: photo }} style={styles.photo} />
          <Button title="Volver a Capturar" onPress={retakePicture} />
        </View>
      )}

      {photo && (
        <View style={styles.vtoTester}>
          <Text style={styles.prepareText}>Prepare su cámara</Text>
          <View style={styles.imageContainer} onMouseMove={handleMouseMove}>
            <Image source={{ uri: photo }} style={styles.capturedImage} />
            {selectedProductImage && (
              <Image
                source={{ uri: selectedProductImage }}
                style={[styles.productImage, productImageStyles]}
                resizeMode="contain" // Añadir resizeMode para asegurar que la imagen se ajuste correctamente
              />
            )}
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => handleScaleImage(1.1)}>
              <Text style={styles.buttonText}>Aumentar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleScaleImage(0.9)}>
              <Text style={styles.buttonText}>Reducir</Text>
            </TouchableOpacity>
          </View>
          <Button title="Volver a Capturar" onPress={retakePicture} />
        </View>
      )}

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleProductSelect(item.imageUrl)}>
            <View style={styles.productCard}>
              <Image source={{ uri: item.imageUrl }} style={styles.productImageThumb} />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text>{item.description}</Text>
                <Text>{item.otherInfo}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
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
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50%',
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 20,
  },
  camera: {
    flex: 1,
    aspectRatio: 1,
  },
  photoContainer: {
    alignItems: 'center',
  },
  photoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  vtoTester: {
    alignItems: 'center',
  },
  prepareText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 300,
    marginBottom: 20,
    overflow: 'hidden',
    backgroundColor: '#ccc',
  },
  capturedImage: {
    width: '100%',
    height: '100%',
  },
  productImage: {
    position: 'absolute',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  productImageThumb: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default ProbadorVirtualScreen;
