import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const InformacionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información</Text>
      <View style={styles.flexContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/fotos/Fachada.jpeg')} // Asegúrate de tener la imagen en la carpeta `assets`
            style={styles.image}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.content}>
            En Optica Nuevo Mundo, nos enorgullecemos de ofrecer una experiencia única y personalizada en el cuidado de la salud visual.
            Con más de seis años de experiencia en el campo oftalmológico, nuestro equipo de profesionales altamente capacitados está comprometido a proporcionar la más alta calidad de atención a cada paciente que entra por nuestras puertas.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  flexContainer: {
    flex: 1,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  image: {
    width: 450,
    height: 200,
    resizeMode: 'contain',
  },
  infoContainer: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontSize: 18,
    textAlign: 'justify',
  },
});

export default InformacionScreen;
