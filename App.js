import React from 'react';
import 'react-native-gesture-handler'
import { Button, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/views/Login'
import Registro from './src/views/Registro'
import SobreApp from './src/views/SobreApp'
import Mapa from './src/views/Mapa'
import Faq from './src/views/Faq'
import Arquitetura from './src/views/Arquitetura'
import Menu from './src/views/Menu'
import Cadastrado from './src/views/Cadastrado'
import Pontos from './src/views/Pontos'
import CadastroPonto from './src/views/CadastroPonto'
import "./src/services/ConnectFirebase"
import { Provider as StoreProvider } from 'react-redux'
import store from './src/services/store'

export default function App() {
  //LogBox.ignoreLogs(['Setting a timer'])

  const Stack = createStackNavigator()
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">

          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Registro"
            component={Registro}
          />


          <Stack.Screen
            name="Cadastrado"
            component={Cadastrado}
          />
          <Stack.Screen
            name="Faq"
            component={Faq}
          />

          <Stack.Screen
              name="Mapa"
              component={Mapa}
            />

          <Stack.Screen
            name="Arquitetura"
            component={Arquitetura}
          />
          
          <Stack.Screen
            name="SobreApp"
            component={SobreApp}
          />
          
          <Stack.Screen
            options={{ title:
            <View style={styles.div}>
            <Button
                  style={styles.botao}
                  title="Sobre o Dev"
                  onPress={() => window.alert("Desenvolvedor do Projeto: Varlei De Cesare, 19 Anos, Cursando 3º Semestre de Ciências da Computação")}
              />
              </View>
           }}
            name="Menu"
            component={Menu}
          />

          <Stack.Screen
            name="CadastroPonto"
            component={CadastroPonto}
          />

          <Stack.Screen
            name="Pontos"
            component={Pontos}
          />


        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  botao: {
      backgroundColor: "gray",
      alignItems: "center",
      justifyContent: "center",
  },
  div:{
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  }
})