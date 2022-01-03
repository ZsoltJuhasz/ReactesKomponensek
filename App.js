import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Componenta from './components/componenta';
import Componentb from './components/componentb';
import Componentc from './components/componentc';

export default function App() {
  const [selected, setSelected] = useState();

  function setTab(tab){
    setSelected(tab);
  }

  function selectTab(){
    switch(selected){
      case 'A': 
        return <Componenta/>
      case 'B':
         return <Componentb/>
      case 'C': 
        return <Componentc/>
      default: 
        return <Componenta/>
    }
  }

  return (
    <View style={styles.container}>
      <Text>Főoldal</Text>
      <View style={styles.component}>
        {selectTab()}
      </View>
      <View style={styles.buttons}>
        <Button title='A komp' onPress={ () => setTab('A')} />
        <Button title='B komp' onPress={ () => setTab('B')} />
        <Button title='C komp' onPress={ () => setTab('C')} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row'
  },
  component:{
    flex: 1, //töltse ki az egészet
  }
});
