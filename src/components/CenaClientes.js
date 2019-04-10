import React, { Component } from 'react';
import { View, StatusBar, Image, StyleSheet, Text } from 'react-native';

  import BarraNavegacao from './BarraNavegacao.js';

  const detalheClientes = require('../imgs/detalhe_cliente.png');
  const cliente1 = require('../imgs/cliente1.png');
  const cliente2 = require('../imgs/cliente2.png');


  export default class CenaClientes extends Component {
      render(){
        return(
          <View style={{ flex: 1, backgroundColor: "#FFF" }}>

            <StatusBar
              //hidden
              backgroundColor = '#B9C941'
            />

            <BarraNavegacao voltar  navigator={this.props.navigator} corDeFundo='#B9C941' />
              <View style={styles.cabecalho}>
                  <Image source={detalheClientes} />
                  <Text style={styles.txtTitulo}>Nossos Clientes</Text>
              </View>
          <View style={styles.tudo}>
              <View style={styles.detalheCliente}>
                  <Image source={cliente1} />
                  <Text style={styles.txtDetalheCliente}>Cliente A, satisfeito com todos os nossos serviços</Text>
                </View>

              <View style={styles.detalheCliente}>
                  <Image source={cliente2} />
                  <Text style={styles.txtDetalheCliente}>Cliente B, satisfeito com todos os nossos serviços</Text>
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
        color: '#B9C941',
        fontSize: 30,
        alignItems: 'center',
        marginTop: 25,
        marginLeft: 20
      },

      detalheCliente: {
        padding: 20,
        marginTop: 10
      },

      txtDetalheCliente: {
        fontSize: 18,
        marginLeft: 20

      }



  });
