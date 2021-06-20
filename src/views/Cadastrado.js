import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

export default function teste(props) {
    const { navigation } = props
    return (
        <View>
            <View style={styles.recebido}>
                <Text style={styles.text}>Horario Marcado no Banco de Horas!</Text>
            </View>
            <View style={styles.image}>
                
                <Image
                    style={styles.logo}
                    source={require('../../assets/undraw.png')}
                    style={{width: "100%", height: 255, marginBottom: 50}}
                />
            </View>
            <View>
            <Button
                    color="#00E615"
                    title="Ver Horarios"
                    onPress={() => navigation.replace("Pontos")}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    recebido:{
        display: "flex",
        alignItems: "center",
    }, 
    text:{
        fontSize: 25,
        marginTop: 30,
        color: "#00E615"        
    },
    
})
