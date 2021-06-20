import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Faq() {
    return (
        <View style={styles.texto}>
            <Text>Aplicativo Para Marcar Ponto</Text>
            <Text>O único objetivo do aplicativo é fazer a marcação do horario de entrada e saída da empresa.</Text>
            <Text>O aplicativo ainda não conta com a parte que gera o relatório do mês,
            por hora ele somente faz o cadastro do dia/hora atual, na página de Pontos traz toda a relação de Pontos Cadastrados.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    texto:{
        margin: 30,
        paddingTop: 40,
        textAlign: "justify"
    }
})
