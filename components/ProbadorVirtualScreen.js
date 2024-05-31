import React, { useState, useRef } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

const ProbadorVirtualScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [photo, setPhoto] = useState(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (cameraRef) {
      let photo = await cameraRef.takePictureAsync();
      setPhoto(photo.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Probador Virtual</Text>
      <View style={styles.cameraContainer}>
        <Camera
          style={styles.camera}
          type={type}
          ref={(ref) => {
            setCameraRef(ref);
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Tomar Foto" onPress={takePicture} />
      </View>
      {photo && (
        <View style={styles.photoContainer}>
          <Text style={styles.photoTitle}>Foto Capturada:</Text>
          <Image source={{ uri: photo }} style={styles.photo} />
        </View>
      )}
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
  },
  camera: {
    flex: 1,
    aspectRatio: 1,
  },
  buttonContainer: {
    marginVertical: 20,
    alignItems: 'center',
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
  },
});

export default ProbadorVirtualScreen;
