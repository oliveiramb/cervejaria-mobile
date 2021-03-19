import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity
} from 'react-native';

import api from './services/axios';

const App = () => {

  const CERVEJAS_MOCK = [
    {
      nome: "Cacilds",
      tipo: "Lager"
    },
    {
      nome: "Heineken",
      tipo: "Lager"
    }
  ]

  const [inputValue, setInputValue] = useState("Teste");
  const [cervejas, setCervejas] = useState(CERVEJAS_MOCK);

  const getCervejas = async () => {
    try{
      const response = await api.get('/cervejas');
      console.log(JSON.stringify(response));
      setCervejas(response.data);
    } catch (error) {
      console.log("DEU RUIM" + error);
    }
    
  }

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
        <TextInput style={styles.input} />
        <TouchableOpacity onPress={getCervejas}>
          <Text>Butaaum</Text>
        </TouchableOpacity>
        
        <FlatList
        data={cervejas}
        renderItem={TextCerveja}
        keyExtractor={ cerveja => cerveja.nome }
        
        
        ></FlatList>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'blue',
    borderWidth: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 42
  },
  input:{
    width: 100,
    height: 40,
    marginVertical: 10,
    borderColor:'black',
    borderWidth: 1
  }
});

export default App;
