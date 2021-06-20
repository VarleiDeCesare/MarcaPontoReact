import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function SobreApp() {
    return (
        <View style={styles.texto}>
            <Text>O Aplicativo foi criado e buildado com o modelo de projeto Expo</Text>
            <Text>A escolha pelo expo foi definida principalmente pela facilidade que o expo traz com diversas libs que ele suporta.</Text>
            <Text>O Expo também apresenta ser muito bem recebido pela comunidade e tendo muitas páginas de ajuda e de pessoas falando sobre 
                ele, caso for preciso de ajuda com algum erro que ele possa ter provocado certamente vai ser encontrado uma pessoa falando como
                resolveu e o por que da ocorrência.</Text>
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
