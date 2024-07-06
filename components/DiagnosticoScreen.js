import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, FlatList } from 'react-native';

const DiagnosticoScreen = () => {
  const [imageUrl, setImageUrl] = useState('https://media.istockphoto.com/id/1387508073/es/vector/revisi%C3%B3n-de-la-vista-tabla-de-pruebas-oculares-examen-de-la-vista-revisar-la-tabla-de-visi%C3%B3n.jpg?s=612x612&w=0&k=20&c=lXI3D4UUhxPjixeZdiAhncJ4DNW4cQGXGYMSfAC8MLA=');
  const [fila, setFila] = useState('');
  const [malestar, setMalestar] = useState('');
  const [procedimiento, setProcedimiento] = useState('');
  const [diagnosticos, setDiagnosticos] = useState([]);

  const agregarDiagnostico = () => {
    const nuevoDiagnostico = {
      id: diagnosticos.length.toString(),
      fila,
      malestar,
      procedimiento
    };
    setDiagnosticos([...diagnosticos, nuevoDiagnostico]);
    setFila('');
    setMalestar('');
    setProcedimiento('');
  };

  const renderItem = ({ item }) => (
    <View style={styles.diagnosticoItem}>
      <Text style={styles.diagnosticoText}>Fila: {item.fila}</Text>
      <Text style={styles.diagnosticoText}>Malestar: {item.malestar}</Text>
      <Text style={styles.diagnosticoText}>Procedimiento: {item.procedimiento}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.imagenContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.imagen}
          resizeMode="contain"
        />
      </View>
      <View style={styles.formulario}>
        <Text style={styles.label}>¿Hasta qué fila puede leer?</Text>
        <TextInput
          style={styles.input}
          value={fila}
          onChangeText={setFila}
          placeholder="Indique el número y detalle..."
        />
        <Text style={styles.label}>¿Qué malestar presenta?</Text>
        <TextInput
          style={styles.input}
          value={malestar}
          onChangeText={setMalestar}
          placeholder="Indique el malestar..."
        />
        <Text style={styles.label}>¿Se realizó algún procedimiento médico?</Text>
        <TextInput
          style={styles.input}
          value={procedimiento}
          onChangeText={setProcedimiento}
          placeholder="Indique si se operó o su tratamiento..."
        />
        <Button title="Enviar" onPress={agregarDiagnostico} />
      </View>
      <FlatList
        data={diagnosticos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.listaDiagnosticos}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  imagenContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 300, // Ajustar el tamaño de la imagen según tu preferencia
  },
  imagen: {
    width: '100%',
    height: '100%',
  },
  formulario: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  listaDiagnosticos: {
    marginTop: 20,
  },
  diagnosticoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  diagnosticoText: {
    fontSize: 16,
  },
});

export default DiagnosticoScreen;
