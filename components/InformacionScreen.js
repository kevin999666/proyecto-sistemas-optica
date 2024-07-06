import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const data = [
  {
    key: '1',
    title: 'Información',
    content: `En Optica Nuevo Mundo, nos enorgullecemos de ofrecer una experiencia única y personalizada en el cuidado de la salud visual.
              Con más de seis años de experiencia en el campo oftalmológico, nuestro equipo de profesionales altamente capacitados está comprometido a proporcionar la más alta calidad de atención a cada paciente que entra por nuestras puertas.`,
    image: require('../assets/fotos/Fachada.jpeg'), // Asegúrate de tener la imagen en la carpeta `assets`
  },
  // Puedes agregar más objetos aquí si tienes más secciones de información
];

const InformacionScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image
        source={item.image}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.content}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 25,
    backgroundColor: '#f9f9f9',
  },
  itemContainer: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  textContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  content: {
    fontSize: 18,
    textAlign: 'justify',
  },
});

export default InformacionScreen;
