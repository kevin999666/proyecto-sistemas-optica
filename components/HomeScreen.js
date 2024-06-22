import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Información"
          onPress={() => navigation.navigate('Informacion')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Catálogo"
          onPress={() => navigation.navigate('Catalogo')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Probador Virtual"
          onPress={() => navigation.navigate('ProbadorVirtual')}
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
    padding: 16,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 10,
  },
});

export default HomeScreen;
