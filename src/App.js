import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList
} from 'react-native';

const App = () => {

  const [inputValue, setInputValue] = useState("Teste");
  
  const CERVEJAS = [
    {
      id: 1,
      nome: "Cacilds",
      tipo: "Lager"
    },
    {
      id: 2,
      nome: "Heineken",
      tipo: "Lager"
    }
  ]

  const TextCerveja = ({item}) => {

    console.log(item)
    return(
      <View>
        <Text>"TESTE"</Text>
        <Text>{item.nome}</Text>
      </View>
    )
  }

  return(
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Cervejaria Cervejas</Text>
        <TextInput style={styles.input} value={inputValue} onChangeText={(value) => setInputValue(value)} />
        
        <FlatList
        data={CERVEJAS}
        renderItem={TextCerveja}
        keyExtractor={ cerveja => cerveja.id }
        
        
        ></FlatList>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'blue',
    borderWidth: 1
  },
  header: {
    fontSize: 42
  },
  input:{
    padding: 10,
    borderColor:"#000000",
    borderWidth: 1
    
  }
});

export default App;
