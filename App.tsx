import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Grid from './Grid';
import Home from './Home';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
