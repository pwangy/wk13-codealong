import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from './components/Header'
import Counter from './components/Counter'

export default function App() {  
  return (
    <View style={styles.container}>
      <Header title='HERRO, world!'/>
      <Counter />
      
      <Header title='Byieeeeee'/>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
// hi sending to github