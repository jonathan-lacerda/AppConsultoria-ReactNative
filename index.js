import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

  import CenaClientes from './src/components/CenaClientes';
  import CenaPrincipal from './src/components/CenaPrincipal';
  import CenaContatos from './src/components/CenaContatos';
  import CenaEmpresa from './src/components/CenaEmpresa';
  import CenaServicos from './src/components/CenaServicos';



  export default class consultoria extends Component {
      render() {
        return (
            <Navigator
              initialRoute={{ id: 'a' }}
              renderScene={(route, navigator) => {
                /*definir a cena com base na rota*/

                  switch (route.id) {
                    case 'a':
                        return(<CenaPrincipal navigator={navigator}/>);

                    case 'cliente':
                        return(<CenaClientes navigator={navigator}/>);

                    case 'contato':
                        return(<CenaContatos navigator={navigator}/>);

                    case 'empresa':
                        return(<CenaEmpresa navigator={navigator}/>);

                    case 'servicos':
                        return(<CenaServicos navigator={navigator}/>);

                    default:
                        return false;

                  }
              }}
            />
        );
      }
  }









AppRegistry.registerComponent('consultoria', () => consultoria);
