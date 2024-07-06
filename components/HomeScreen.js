import React from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  // Array de botones de navegación con iconos
  const botones = [
    { key: 'Informacion', title: 'Información', icon: 'info-circle' },
    { key: 'Catalogo', title: 'Catálogo', icon: 'shopping-cart' },
    { key: 'ProbadorVirtual', title: 'Probador Virtual', icon: 'magic' },
    { key: 'Diagnostico', title: 'Diagnóstico', icon: 'heartbeat' }
  ];

  const renderItem = ({ item }) => (
    <View style={styles.buttonContainer}>
      <Icon.Button
        name={item.icon}
        backgroundColor="#3b5998"
        onPress={() => navigation.navigate(item.key)}
        style={styles.iconButton}
        iconStyle={styles.icon}
        borderRadius={0}
        size={30}
      >
        {item.title}
      </Icon.Button>
    </View>
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
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 10,
  },
  iconButton: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 15,
    paddingVertical: 15,
  },
  icon: {
    marginRight: 10,
  },
});

export default HomeScreen;
