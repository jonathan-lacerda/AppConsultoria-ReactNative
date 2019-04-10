import React, { Component } from 'react';
import { View, StatusBar, Image, StyleSheet, Text } from 'react-native';

  import BarraNavegacao from './BarraNavegacao.js';

  const detalheContatos = require('../imgs/detalhe_contato.png');



  export default class CenaContatos extends Component {
      render(){
        return(
          <View style={{ flex: 1, backgroundColor: "#FFF" }}>

            <StatusBar
              //hidden
              backgroundColor = '#61BD8C'
            />

            <BarraNavegacao voltar  navigator={this.props.navigator} corDeFundo='#61BD8C'/>
              <View style={styles.cabecalho}>
                  <Image source={detalheContatos} />
                  <Text style={styles.txtTitulo}>Contatos</Text>
              </View>

          <View style={styles.tudo}>
              <View style={styles.detalheContato}>
                  <Text style={styles.txtContato}>TEL: (11) 1234-1234</Text>
                  <Text style={styles.txtContato}>CEL: (11) 91234-1234</Text>
                  <Text style={styles.txtContato}>EMAIL: contato@atmconsultoria.com</Text>
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

      detalheContato: {
          marginTop: 20,
          padding: 20
      },

      txtContato: {
        fontSize: 18
      }




  });
