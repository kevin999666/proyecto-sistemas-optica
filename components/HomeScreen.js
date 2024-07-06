import React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  // Array de botones de navegación con iconos
  const botones = [
    { key: 'Informacion', title: 'Información', icon: 'info-circle', color: '#3498db' },
    { key: 'Catalogo', title: 'Catálogo', icon: 'shopping-cart', color: '#e67e22' },
    { key: 'ProbadorVirtual', title: 'Probador Virtual', icon: 'magic', color: '#9b59b6' },
    { key: 'Diagnostico', title: 'Diagnóstico', icon: 'heartbeat', color: '#e74c3c' }
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: item.color }]} onPress={() => navigation.navigate(item.key)}>
      <View style={styles.iconButton}>
        <Icon name={item.icon} size={30} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={botones}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    width: '90%',
    marginBottom: 15,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default HomeScreen;
