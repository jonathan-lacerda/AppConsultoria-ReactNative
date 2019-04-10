import React, { Component } from 'react';
import { View, StatusBar, Image, StyleSheet, Text } from 'react-native';

  import BarraNavegacao from './BarraNavegacao.js';

  const detalheServicos = require('../imgs/detalhe_servico.png');



  export default class CenaServicos extends Component {
      render(){
        return(
          <View style={{ flex: 1, backgroundColor: "#FFF" }}>

            <StatusBar
              //hidden
              backgroundColor = '#19D1C8'
            />

            <BarraNavegacao voltar  navigator={this.props.navigator} corDeFundo='#19D1C8'/>
              <View style={styles.cabecalho}>
                  <Image source={detalheServicos} />
                  <Text style={styles.txtTitulo}>Nossos Serviços</Text>
              </View>

          <View style={styles.tudo}>
              <View style={styles.detalheServicos}>
                  <Text style={styles.txtServicos}>*Consultoria</Text>
                  <Text style={styles.txtServicos}>*Processos</Text>
                  <Text style={styles.txtServicos}>*Acompanhamento de Projetos</Text>

                </View>


            </View>
          </View>

        );
      }
  }

  const styles = StyleSheet.create({

    tudo: {
      alignItems: 'center',
      marginTop: 75
    },

      cabecalho:{
        flexDirection: 'row',
        margin: 10
      },

      txtTitulo:{
        color: '#19D1C8',
        fontSize: 30,
        alignItems: 'center',
        marginTop: 25,
        marginLeft: 20
      },

      detalheServicos: {
          marginTop: 20,
          padding: 20
      },

    txtServicos: {
        fontSize: 18
      }




  });
