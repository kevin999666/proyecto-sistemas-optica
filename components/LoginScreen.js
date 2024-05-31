import React from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/fotos/Logo.jpg')}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Ingresar"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 270,
    height: 150,
    marginBottom: 30,
  },
  buttonContainer: {
    width: '80%',
  },
});

export default LoginScreen;
