import React, { Component } from 'react';
import { View, StatusBar, Image, StyleSheet, Text } from 'react-native';

  import BarraNavegacao from './BarraNavegacao.js';

  const detalheEmpresa = require('../imgs/detalhe_empresa.png');



  export default class CenaEmpresa extends Component {
      render(){
        return(
          <View style={{ flex: 1, backgroundColor: "#FFF" }}>

            <StatusBar
              //hidden
              backgroundColor = '#EC7148'
            />

            <BarraNavegacao voltar  navigator={this.props.navigator} corDeFundo='#EC7148' />
              <View style={styles.cabecalho}>
                  <Image source={detalheEmpresa} />
                  <Text style={styles.txtTitulo}>A Empresa</Text>
              </View>

          <View style={styles.tudo}>
              <View style={styles.detalheEmpresa}>
                  <Text style={styles.txtEmpresa}>Esta empresa foi fundada no ano de xxx e atua até hoje no mercado como líder em eficiência.</Text>

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
        color: '#61BD8C',
        fontSize: 30,
        alignItems: 'center',
        marginTop: 25,
        marginLeft: 20
      },

      detalheEmpresa: {
          marginTop: 20,
          padding: 20
      },

      txtContato: {
        fontSize: 18
      }




  });
