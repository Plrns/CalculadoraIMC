import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { TextInput, Button } from 'react-native-paper'

export default class App extends React.Component {
  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    legenda: 'Indeterminado',
    cor: '#bdc3c7'
  };

  calculaIMC = () => {
    const resultado = this.state.peso / (this.state.altura * this.state.altura);

    this.setState({
      imc: Math.ceil(resultado)
    });

    if(resultado < 18.5){
      this.setState({
        legenda: 'Magreza',
        cor: '#e74c3c'
      })
    }else if(resultado >= 18.5 && resultado < 25) {
      this.setState({
        legenda: 'Normal',
        cor: '#2ecc71'
      })
    }else if(resultado >= 25 && resultado < 30) {
      this.setState({
        legenda: 'Sobrepeso',
        cor: '#f1c40f'
      })
    }else if(resultado >= 30 && resultado < 40) {
      this.setState({
        legenda: 'Obesidade',
        cor: '#e67e22'
      })
    }else {
      this.setState({
        legenda: 'Obesidade grave',
        cor: '#e74c3c'
      })
    }
  };

  render() {
    return (
      <View style={styles.app}>
        
        <Text style={styles.txtTop}>Seu IMC</Text>
        
        <View style={[styles.painel, {backgroundColor: this.state.cor}]}>
          <Text style={styles.result}>{this.state.imc}</Text>
          <Text style={styles.resultTxt}>{this.state.legenda}</Text>
        </View>
        
        <View>
          <TextInput
          label="Peso"
          style={styles.input} 
          onChangeText={text => {
            this.setState({peso: text.replace(',', '.')})
          }}/>
          <TextInput 
          label="Altura"
          style={styles.input} 
          onChangeText={text => {
            this.setState({altura: text.replace(',', '.')})
          }}/>
          <Button mode="contained" onPress={this.calculaIMC} title="Calcular">Calcular</Button>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    padding: 50,
  },
  txtTop: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  result: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  resultTxt: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff'
  },
  input: {
    marginVertical: 10
  },
  painel:{
    borderRadius: 5,
    padding: 8,
    marginVertical: 10,
    width: 150,
    alignSelf: 'center'
  }
});
